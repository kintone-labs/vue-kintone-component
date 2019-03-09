import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Alert from './Alert.vue';

interface Props {
    text: string;
    type?: 'error' | 'success';
    isDisabled?: boolean;
    isVisible?: boolean;
}
describe('Alet', () => {
    function newAlert(propsData: Props) {
        return mount(Alert, { propsData });
    }

    test('text attribute', () => {
        const data = { text: 'Alert' };
        const wrapper = newAlert(data);
        expect(wrapper.text()).toBe('Alert');
    });

    test.each([
        ['error', 'kuc-alert', 'bg-danger'],
        ['success', 'kuc-alert', 'bg-success'],
        ['invalid', 'kuc-alert', 'bg-danger'],
    ])(
        'type attribute with %s convert name classname',
        (type, expectedClass) => {
            const props = { text: 'Alert', type } as Props;
            const wrapper = newAlert(props);
            expect(wrapper.classes()).toContain(
                expectedClass
            );
        }
    );

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                text: 'Alert',
                isVisible,
            } as Props;
            const wrapper = newAlert(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('emit click event', () => {
        const props = {
            text: 'Alert',
        };
        const methods = {
            click: function(): void {
                console.log(1);
            },
        };
        const wrapper = newAlert(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toHaveLength(1);
    });

    test('not emit click event', () => {
        const props = {
            text: 'Alert',
            isDisabled: true,
        };
        const wrapper = newAlert(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toBe(undefined);
    });
});

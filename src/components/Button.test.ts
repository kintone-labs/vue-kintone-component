import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

interface Props {
    text: string;
    type?: 'error' | 'success';
    isDisabled?: boolean;
    isVisible?: boolean;
}
describe('Button', () => {
    function newButton(propsData: Props) {
        return mount(Button, { propsData });
    }

    test('text attribute', () => {
        const data = { text: 'Button' };
        const wrapper = newButton(data);
        expect(wrapper.text()).toBe('Button');
    });

    test.each([
        ['normal', 'kuc-btn', 'normal'],
        ['submit', 'kuc-btn', 'submit'],
        ['dummy', 'kuc-btn', 'submit'],
    ])(
        'type attribute with %s convert name classname',
        (type, expectedClass) => {
            const props = { text: 'Button', type } as Props;
            const wrapper = newButton(props);
            expect(wrapper.classes()).toContain(
                expectedClass
            );
        }
    );

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                text: 'Button',
                isVisible,
            } as Props;
            const wrapper = newButton(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('emit click event', () => {
        const props = {
            text: 'Button',
        };
        const wrapper = newButton(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toHaveLength(1);
    });

    test('not emit click event', () => {
        const props = {
            text: 'Button',
            isDisabled: true,
        };
        const wrapper = newButton(props);
        wrapper.trigger('click');
        expect(wrapper.attributes().disabled).toBe(
            'disabled'
        );
        expect(wrapper.emitted().click).toBe(undefined);
    });
});

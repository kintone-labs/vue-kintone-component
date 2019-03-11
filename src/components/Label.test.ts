import { mount } from '@vue/test-utils';
import Label from './Label.vue';

interface Props {
    text: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isVisible?: boolean;
}
describe('Label', () => {
    function newLabel(propsData: Props) {
        return mount(Label, { propsData });
    }

    test('text attribute', () => {
        const data = { text: 'Label' };
        const wrapper = newLabel(data);
        expect(wrapper.text()).toBe('Label');
    });

    test('emit click event', () => {
        const props = {
            text: 'Label',
        };
        const wrapper = newLabel(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toHaveLength(1);
    });

    test('not emit click event', () => {
        const props = {
            text: 'Alert',
            isDisabled: true,
        };
        const wrapper = newLabel(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toBe(undefined);
    });

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                text: 'Label',
                isVisible,
            } as Props;
            const wrapper = newLabel(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('attribute isRequired', () => {
        const props = {
            text: 'Label',
            isRequired: true,
        } as Props;
        const wrapper = newLabel(props);
        expect(wrapper.find('.kuc-require').text()).toEqual(
            '*'
        );
    });
});

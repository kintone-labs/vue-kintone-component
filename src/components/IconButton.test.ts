import { mount } from '@vue/test-utils';
import IconButton from './IconButton.vue';

interface Props {
    type?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
}
describe('IconButton', () => {
    function newIconButton(propsData: Props) {
        return mount(IconButton, { propsData });
    }

    test.each([
        ['insert', ['fa', 'fa-plus']],
        ['close', ['fa', 'fa-times']],
        ['remove', ['fa', 'fa-minus']],
        ['invalid', ['fa', 'fa-plus']],
    ])(
        'type attribute with %s convert to iconClassName %s',
        (type, expected) => {
            const wrapper = newIconButton({
                type,
            } as Props);
            expect(wrapper.find('i').classes()).toEqual(
                expected
            );
        }
    );

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                isVisible,
            } as Props;
            const wrapper = newIconButton(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('emit click event', () => {
        const props: Props = {};
        const wrapper = newIconButton(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toHaveLength(1);
    });

    test('not emit click event', () => {
        const props = {
            isDisabled: true,
        };
        const wrapper = newIconButton(props);
        wrapper.trigger('click');
        expect(wrapper.attributes().disabled).toBe(
            'disabled'
        );
        expect(wrapper.emitted().click).toBe(undefined);
    });
});

import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';

interface Props {
    id: string;
    name: string;
    checked: boolean;
    label: string;
    isDisabled?: boolean;
    isVisible?: boolean;
}

describe('Checkbox', () => {
    function newCheckbox(propsData: Props) {
        return mount(Checkbox, { propsData });
    }

    const sampleProps = {
        id: 'id',
        name: 'name',
        checked: false,
        label: 'Checkbox',
    } as Props;

    test('label attribute', () => {
        const wrapper = newCheckbox(sampleProps);
        expect(wrapper.text()).toBe('Checkbox');
    });

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const wrapper = newCheckbox(
                Object.assign({}, sampleProps, {
                    isVisible,
                })
            );
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('emit click event', () => {
        const wrapper = newCheckbox(sampleProps);
        wrapper.find('label').trigger('click');
        expect(wrapper.emitted().change).toHaveLength(1);
    });

    test('not emit click event', () => {
        const wrapper = newCheckbox(
            Object.assign({}, sampleProps, {
                isDisabled: true,
            })
        );
        wrapper.find('label').trigger('click');
        expect(
            wrapper.find('input').attributes().disabled
        ).toBe('disabled');
        expect(wrapper.emitted().change).toBe(undefined);
    });
});

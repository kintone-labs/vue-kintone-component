import { mount } from '@vue/test-utils';
import Text from './Text.vue';

interface Props {
    value: string;
    isDisabled?: boolean;
    isVisible?: boolean;
}

describe('Text', () => {
    function newText(propsData: Props) {
        return mount(Text, { propsData });
    }

    const sampleProps = {
        value: 'Text',
    } as Props;

    test('text attribute', () => {
        const wrapper = newText(sampleProps);
        expect(wrapper.props().value).toBe('Text');
    });

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const wrapper = newText(
                Object.assign({}, sampleProps, {
                    isVisible,
                })
            );
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('emit change event', () => {
        const wrapper = newText(sampleProps);
        wrapper.setProps({ value: 'newText' });
        wrapper.find('input').trigger('change');

        expect(wrapper.emitted().change).toHaveLength(1);
        expect(wrapper.emitted().change[0]).toEqual([
            'newText',
        ]);
    });

    test('not emit change event', () => {
        const wrapper = newText(
            Object.assign({}, sampleProps, {
                isDisabled: true,
            })
        );
        wrapper.find('input').trigger('change');
        expect(
            wrapper.find('input').attributes().disabled
        ).toBe('disabled');
        expect(wrapper.emitted().change).toBe(undefined);
    });
});

import { mount, shallowMount } from '@vue/test-utils';
import MultipleChoice from './MultipleChoice.vue';
import ListItem from './ListItem.vue';

interface Props {
    values: string[];
    items: {
        value: string;
        label: string;
        selected?: boolean;
    }[];
}

describe('MultipleChoice', () => {
    function newMultipleChoice(propsData: Props) {
        return mount(MultipleChoice, { propsData });
    }

    function newMultipleChoiceShallowMount(
        propsData: Props
    ) {
        return shallowMount(MultipleChoice, { propsData });
    }

    const sampleProps = {
        items: [
            {
                value: '1',
                label: 'label-1',
            },
            {
                value: '2',
                label: 'label-2',
            },
            {
                value: '3',
                label: 'label-3',
                isDisabled: true,
            },
        ],
        values: [],
    } as Props;

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = Object.assign({}, sampleProps, {
                isVisible,
            });
            const wrapper = newMultipleChoice(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    function clickListItemOf(wrapper: any, index: number) {
        wrapper
            .findAll(ListItem)
            .at(index)
            .trigger('click');
    }

    test('when click option, emit change event with checked items', () => {
        const wrapper = newMultipleChoice(sampleProps);

        clickListItemOf(wrapper, 0);
        const changeEv1 = wrapper.emitted().change;
        expect(changeEv1).toHaveLength(1);
        expect(changeEv1[0]).toEqual([['1']]);

        wrapper.setProps({ values: ['1'] });

        clickListItemOf(wrapper, 1);
        expect(wrapper.emitted().change[1]).toEqual([
            ['1', '2'],
        ]);
    });

    test('when click selected option, emit change event with items which clicked option is removed', () => {
        const wrapper = newMultipleChoice(sampleProps);

        clickListItemOf(wrapper, 0);
        const changeEv1 = wrapper.emitted().change;
        expect(changeEv1).toHaveLength(1);
        expect(changeEv1[0]).toEqual([['1']]);

        wrapper.setProps({ values: ['1'] });

        clickListItemOf(wrapper, 0);
        expect(wrapper.emitted().change[1]).toEqual([[]]);
    });

    test.skip('emit click event and change open/close status', () => {
        const wrapper = newMultipleChoice(sampleProps);

        expect(wrapper.emitted().click).toHaveLength(1);
        expect(wrapper.vm.$data.showItems).toEqual(true);
        expect(
            wrapper.find('.kuc-list-outer').exists()
        ).toBe(true);

        expect(wrapper.emitted().click).toHaveLength(2);
    });

    test.skip('not emit click event', () => {
        const wrapper = newMultipleChoice(
            Object.assign({}, sampleProps, {
                isDisabled: true,
            })
        );
        wrapper
            .find('.kuc-MultipleChoice-outer')
            .trigger('click');
        expect(wrapper.emitted().click).toBe(undefined);
    });

    test.skip('isDisable flag in items is given in ItemList component', () => {
        const wrapper = newMultipleChoiceShallowMount(
            sampleProps
        );

        expect(
            wrapper
                .findAll(ListItem)
                .at(2)
                .props('isDisabled')
        ).toEqual(true);
    });

    test.skip('num of MultipleChoice item equals items in props', () => {
        const wrapper = newMultipleChoiceShallowMount(
            sampleProps
        );

        expect(wrapper.findAll(ListItem)).toHaveLength(3);
    });
});

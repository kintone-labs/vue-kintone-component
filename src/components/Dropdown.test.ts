import { mount, shallowMount } from '@vue/test-utils';
import Dropdown from './Dropdown.vue';
import ListItem from './ListItem.vue';

interface Props {
    value: string;
    items: {
        value: string;
        label: string;
        selected?: boolean;
    }[];
}

describe('Dropdown', () => {
    function newDropdown(propsData: Props) {
        return mount(Dropdown, { propsData });
    }

    function newDropdownShallowMount(propsData: Props) {
        return shallowMount(Dropdown, { propsData });
    }

    function clickDropdown(wrapper: any) {
        wrapper
            .find('.kuc-dropdown-outer')
            .trigger('click');
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
        value: '',
    } as Props;

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const wrapper = newDropdown(
                Object.assign({}, sampleProps, {
                    isVisible,
                })
            );
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test('when click option, close dropdown, emit change event', () => {
        const wrapper = newDropdown(sampleProps);
        clickDropdown(wrapper);

        wrapper
            .findAll(ListItem)
            .at(0)
            .trigger('click');

        expect(
            wrapper.find('.kuc-list-outer').exists()
        ).toBe(false);
        const changeEv = wrapper.emitted().change;
        expect(changeEv).toHaveLength(1);
        expect(changeEv[0]).toEqual([
            { label: 'label-1', value: '1' },
        ]);
    });

    test('When new options value is set, selected option label is shown', () => {
        const wrapper = newDropdown(sampleProps);
        wrapper.setProps({ value: '1' });
        expect(
            wrapper
                .find('.kuc-dropdown-selected-name')
                .text()
        ).toEqual('label-1');
    });

    test('emit click event and change open/close status', () => {
        const wrapper = newDropdown(sampleProps);
        clickDropdown(wrapper);
        expect(wrapper.emitted().click).toHaveLength(1);
        expect(wrapper.vm.$data.showItems).toEqual(true);
        expect(
            wrapper.find('.kuc-list-outer').exists()
        ).toBe(true);

        clickDropdown(wrapper);
        expect(wrapper.emitted().click).toHaveLength(2);
        expect(wrapper.vm.$data.showItems).toEqual(false);
        expect(
            wrapper.find('.kuc-list-outer').exists()
        ).toBe(false);
    });

    test('not emit click event', () => {
        const wrapper = newDropdown(
            Object.assign({}, sampleProps, {
                isDisabled: true,
            })
        );
        wrapper
            .find('.kuc-dropdown-outer')
            .trigger('click');
        expect(wrapper.emitted().click).toBe(undefined);
        expect(wrapper.props().isDisabled).toBe(true);
    });

    test('isDisable flag in items is given in ItemList component', () => {
        const wrapper = newDropdownShallowMount(
            sampleProps
        );
        clickDropdown(wrapper);

        expect(
            wrapper
                .findAll(ListItem)
                .at(2)
                .props('isDisabled')
        ).toEqual(true);
    });

    test('num of dropdown item equals items in props', () => {
        const wrapper = newDropdownShallowMount(
            sampleProps
        );
        clickDropdown(wrapper);

        expect(wrapper.findAll(ListItem)).toHaveLength(3);
    });
});

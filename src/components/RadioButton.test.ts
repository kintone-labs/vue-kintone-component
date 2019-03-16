import { mount } from '@vue/test-utils';
import RadioButton from './RadioButton.vue';

interface Props {
    value: string;
    items: {
        value: string;
        label: string;
    }[];
}

describe('RadioButton', () => {
    function newRadioButton(propsData: Props) {
        return mount(RadioButton, { propsData });
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
            const wrapper = newRadioButton(
                Object.assign({}, sampleProps, {
                    isVisible,
                })
            );
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    function clickLabel(wrapper: any, index: number) {
        wrapper
            .findAll('label')
            .at(index)
            .trigger('click');
        return wrapper.emitted().change;
    }

    test('when click option, close RadioButton, emit change event', () => {
        const wrapper = newRadioButton(sampleProps);

        clickLabel(wrapper, 0);
        const change = clickLabel(wrapper, 1);
        expect(change).toHaveLength(2);
        expect(change[0]).toEqual(['1']);
        expect(change[1]).toEqual(['2']);
    });

    test('not emit click event', () => {
        const wrapper = newRadioButton(
            Object.assign({}, sampleProps, {
                isDisabled: true,
            })
        );
        wrapper
            .findAll('label')
            .at(0)
            .trigger('click');
        expect(wrapper.emitted().click).toBe(undefined);
        expect(wrapper.props().isDisabled).toBe(true);
    });

    test('disabled attribute in items is given to the input', () => {
        const wrapper = newRadioButton(sampleProps);
        expect(
            wrapper
                .findAll('input')
                .at(2)
                .attributes('disabled')
        ).toEqual('disabled');
    });

    test('isDisabled props is given to each input', () => {
        const props = Object.assign({}, sampleProps, {
            isDisabled: true,
        });
        const wrapper = newRadioButton(props);
        const assertDisabledAttribute = (index: number) => {
            expect(
                wrapper
                    .findAll('input')
                    .at(index)
                    .attributes('disabled')
            ).toEqual('disabled');
        };
        [0, 1, 2].map(assertDisabledAttribute);
    });

    test('num of RadioButton item equals items in props', () => {
        const wrapper = newRadioButton(sampleProps);
        expect(wrapper.findAll('input')).toHaveLength(3);
    });
});

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import MultipleChoice from '../../components/MultipleChoice';

const stories = storiesOf('MultipleChoice', module);
stories.addDecorator(withKnobs);
stories.add('As a component', () => ({
    props: {
        isDisabled: {
            default: boolean('isDisabled', false),
        },
        isVisible: {
            default: boolean('isVisible', true),
        },
    },
    data() {
        return {
            items: [
                {
                    value: '1',
                    label: 'Option1',
                },
                {
                    value: '2',
                    label: 'Option2',
                },
                {
                    value: '3',
                    label: 'Option3(Disabled)',
                    isDisabled: true,
                },
            ],
            values: [],
        };
    },
    methods: {
        actionChange: action('change'),
        change(newValues) {
            this.values = newValues;
            this.actionChange(this.values);
        },
    },
    components: { MultipleChoice },
    template: `
        <MultipleChoice
            :items="items"
            :values="values"
            :isVisible="isVisible"
            :isDisabled="isDisabled"
            @change="change" 
        />`,
}));

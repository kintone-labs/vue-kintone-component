import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import MutipleChoice from '../../components/MutipleChoice';

const stories = storiesOf('MutipleChoice', module);
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
        change(newVals) {
            this.values = newVals;
            this.actionChange(this.values);
        },
    },
    components: { MutipleChoice },
    template: `
        <MutipleChoice
            :items="items"
            :values="values"
            :isVisible="isVisible"
            :isDisabled="isDisabled"
            @change="change" 
        />`,
}));

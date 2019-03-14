import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import Dropdown from '../../components/Dropdown';

const stories = storiesOf('Dropdown', module);
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
                    label: 'Option 1',
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
            value: '',
        };
    },
    methods: {
        actionChange: action('change'),
        change(newVal) {
            this.value = newVal.value;
            this.actionChange(this.value);
        },
    },
    components: { Dropdown },
    template: `
        <Dropdown
            :items="items"
            :value="value"
            :isVisible="isVisible"
            :isDisabled="isDisabled"
            @change="change" 
        />`,
}));

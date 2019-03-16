import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import RadioButton from '../../components/RadioButton';

const stories = storiesOf('RadioButton', module);
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
                    id: 'option1',
                },
                {
                    value: '2',
                    label: 'Option2',
                    id: 'option2',
                },
                {
                    value: '3',
                    label: 'Option3(Disabled)',
                    id: 'option3',
                    isDisabled: true,
                },
            ],
            value: '',
        };
    },
    methods: {
        actionChange: action('change'),
        change(newValue) {
            this.value = newValue;
            this.actionChange(this.value);
        },
    },
    components: { RadioButton },
    template: `
        <RadioButton
            :items="items"
            :value="value"
            :isVisible="isVisible"
            :isDisabled="isDisabled"
            @change="change" 
        />`,
}));

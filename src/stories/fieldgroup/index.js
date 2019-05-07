import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    boolean,
    radios,
} from '@storybook/addon-knobs';

import FieldGroup from '../../components/FieldGroup';
import KText from '../../components/Text';
import RadioButton from '../../components/RadioButton';
const changeToggle = action('change');
const stories = storiesOf('FieldGroup', module);
stories.addDecorator(withKnobs);
stories.add('As a component', () => ({
    components: {
        FieldGroup,
        KText,
        RadioButton,
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
            value: '2',
            toggle: 'expand',
        };
    },
    props: {
        isDisabled: {
            default: boolean('isDisabled', false),
        },
    },
    methods: {
        click(newVal) {
            this.toggle = newVal;
            changeToggle(newVal);
        },
    },
    template: `
        <FieldGroup
            name="Group"
            :toggle="toggle"
            @change="newVal => click(newVal)"
        >
            <template>
                <KText value="Sample Text" />
                <RadioButton 
                    :items="items"
                    :value="value"
                />
            </template>
        </FieldGroup>
        `,
}));

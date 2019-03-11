import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import Checkbox from '../../components/Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a template',
        () => `<kintone-checkbox 
                label="label"
                name="name" 
                id="id"
                />`
    )
    .add('As a component', () => ({
        components: { Checkbox },
        props: {
            id: {
                default: text('id', 'id'),
            },
            label: {
                default: text('label', 'Label message'),
            },
            name: {
                default: text('name', 'name'),
            },
            isDisabled: {
                default: boolean('isDisabled', false),
            },
            isVisible: {
                default: boolean('isVisible', true),
            },
        },
        data() {
            return {
                checked: false,
            };
        },
        methods: {
            change: action('change'),
        },
        template: `
        <Checkbox
            :id="id"
            :label="label"
            :name="name"
            :isDisabled="isDisabled"
            v-model="checked"
            @change="change"
        />
`,
    }));

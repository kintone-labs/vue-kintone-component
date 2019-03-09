import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import Alert from '../../components/Alert';

const stories = storiesOf('Alert', module);
stories.addDecorator(withKnobs);
stories
    .add('As a template', () => `<alert text="Alert" />`)
    .add('As a component', () => ({
        components: { Alert },
        props: {
            text: {
                default: text('text', 'Alert Message'),
            },
            type: {
                default: text('type', ''),
            },
            isDisabled: {
                default: boolean('isDisabled', false),
            },
            isVisible: {
                default: boolean('isVisible', true),
            },
        },
        methods: {
            click: action('click'),
        },
        template: `
        <Alert
            :text="text"
            :type="type"
            :isDisabled="isDisabled"
            :isVisible="isVisible"
            @click="click"
        />`,
    }));

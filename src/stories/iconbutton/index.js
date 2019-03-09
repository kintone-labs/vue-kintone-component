import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import IconButton from '../../components/IconButton';

const stories = storiesOf('IconButton', module);
stories.addDecorator(withKnobs);
stories
    .add('As a template', () => `<kintone-icon-button />`)
    .add('As a component', () => ({
        components: { IconButton },
        props: {
            type: {
                default: text('type', 'insert'),
            },
            color: {
                default: text('color', 'gray'),
            },
            size: {
                default: text('size', 'large'),
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
        <IconButton
            :type="type"
            :color="color"
            :size="size"
            :isDisabled="isDisabled"
            :isVisible="isVisible"
            @click="click"
        />`,
    }));

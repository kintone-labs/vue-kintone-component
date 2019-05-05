import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    boolean,
    radios,
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
                default: radios(
                    'type',
                    ['remove', 'other'],
                    'other'
                ),
            },
            color: {
                default: radios(
                    'color',
                    ['gray', 'blue', 'red', 'green'],
                    'gray'
                ),
            },
            size: {
                default: radios(
                    'size',
                    ['small', 'large'],
                    'large'
                ),
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

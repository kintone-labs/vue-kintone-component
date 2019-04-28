import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
    radios,
} from '@storybook/addon-knobs';

import Button from '../../components/Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a template',
        () => `<kintone-button text="hello, world" />`
    )
    .add('As a component', () => ({
        components: { Button },
        props: {
            text: {
                default: text('text', 'Button Message'),
            },
            type: {
                default: radios(
                    'type',
                    ['submit', 'normal'],
                    'normal'
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
        <Button
            :text="text"
            :type="type"
            :isDisabled="isDisabled"
            :isVisible="isVisible"
            @click="click"
        />`,
    }));

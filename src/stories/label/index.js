import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

import Label from '../../components/Label';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a template',
        () => `<kintone-label text="label" />`
    )
    .add('As a component', () => ({
        components: { Label },
        props: {
            text: {
                default: text('text', 'Label message'),
            },
            isRequired: {
                default: boolean('isRequired', false),
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
        <Label
            :text="text"
            :isRequired="isRequired"
            :isDisabled="isDisabled"
            :isVisible="isVisible"
            @click="click"
        />`,
    }));

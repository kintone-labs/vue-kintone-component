import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import NotifyPopup from '../../components/NotifyPopup';
import {
    withKnobs,
    text,
    boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('NotifyPopup', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a Template',
        () => `<kintone-notify-popup text="notify"/>`
    )
    .add('As a Component', () => ({
        components: { NotifyPopup },
        props: {
            text: {
                default: text('text', 'notify'),
            },
            type: {
                default: text('type', 'error'),
            },
            isVisible: {
                default: boolean('isVisible', true),
            },
            isDisabled: {
                default: boolean('isDisabled', false),
            },
        },
        methods: {
            click: action('click'),
            clickClose: action('click-close'),
        },
        template: `
    <NotifyPopup 
        :text="text"
        :type="type"
        :isDisabled="isDisabled"
        :isVisible="isVisible"
        @click="click"
        @click-close="clickClose"
    />
    `,
    }));

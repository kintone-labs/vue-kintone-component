import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import KText from '../../components/Text';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a template',
        () => `<kintone-text 
                value="value"
                />`
    )
    .add('As a component', () => ({
        components: { KText },
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
                value: '',
            };
        },
        methods: {
            change: action('change'),
        },
        template: `
        <KText
            :isDisabled="isDisabled"
            :isVisible="isVisible"
            v-model="value"
            @change="change"
        />`,
    }));

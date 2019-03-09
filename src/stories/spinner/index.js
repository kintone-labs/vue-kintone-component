import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Spinner from '../../components/Spinner';

const stories = storiesOf('Spinner', module);
stories.addDecorator(withKnobs);
stories
    .add(
        'As a template',
        () => `<div>Here<kintone-spinner /></div>`
    )
    .add('As a component', () => ({
        components: { Spinner },
        props: {
            isVisible: {
                default: boolean('isVisible', true),
            },
        },
        template: `
        <Spinner
            :isVisible="isVisible"
        />`,
    }));

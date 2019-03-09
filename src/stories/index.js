import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import NotifyPopup from '../components/NotifyPopup';

storiesOf('NotifyPopup')
    .add(
        'story as a template',
        () => `<kintone-notify-popup text="notify!"/>`
    )
    .add('as Component', () => ({
        components: { NotifyPopup },
        data() {
            return {
                onClick: () => {
                    console.log('clicked');
                    action('clicked');
                },
                isVisible: false,
            };
        },
        template: `
    <NotifyPopup text="notify!" />
    `,
    }));

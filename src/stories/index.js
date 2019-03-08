

import { storiesOf } from '@storybook/vue';

import Alert from '../components/Alert';

storiesOf('Alert')
  .add('story as a template', () => `<kintone-alert><span>危険です</span></kintone-alert>`)
  .add('story as a component', () => ({
    components: { Alert },
    template: '<Alert><span>危険です!</span></Alert>'
  }));
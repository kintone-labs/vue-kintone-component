

import { storiesOf } from '@storybook/vue';

import Alert from '../components/Alert';

storiesOf('Alert')
  .add('story as a template', () => `<kintone-alert text="hello, world" />`)
  .add('background color is red', () => ({
    components: { Alert },
    template: '<Alert text="hello, world" />'
  }))
  .add('background color is green', () => ({
    components: { Alert },
    template: '<Alert text="hello, world" type="success"/>'
  }))
  ;
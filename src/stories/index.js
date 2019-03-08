

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions'

import Alert from '../components/Alert';
import Button from '../components/Button'
import IconButton from "../components/IconButton"


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
  .add('handle click event', () => ({
    components: { Alert },
    data() {
      return {
        onClick: () => action('clicked')
      }
    },
    template: '<Alert text="hello, world" :onClick="onClick"/>'
  }))
  .add('disabled is false', () => ({
    components: { Alert },
    data() {
      return {
        onClick: () => { console.log('clicked'); action('clicked') },
        isDisabled: true
      }
    },
    template: '<Alert text="hello, world" :isDisabled="isDisabled"  :onClick="onClick" />'
  }))
  .add('visible is false', () => ({
    components: { Alert },
    data() {
      return {
        isVisible: false
      }
    },
    template: '<Alert text="hello, world" :isVisible="isVisible" />'
  }))
  ;

storiesOf('Button')
.add('story as a template', () => `<kintone-button text="hello, world" />`)
.add('type is normal', () => ({
  components: { Button },
  template: '<Button text="hello, world" />'
}))
.add('type is submit', () => ({
    components: { Button },
    template: '<Button text="hello, world" type="submit" />'
  }))
.add('isDisabled is true', () => ({
    components: { Button },
    data() {
      return {
        isDisabled: true
      }
    },
    template: '<Button text="hello, world" :isDisabled="isDisabled" />'
  }))
;

storiesOf('IconButton')
  .add('story as a template', () => `<kintone-icon-button />`)
  .add('color variation', () => ({
    components: { IconButton },
    template: `
    <div>
      <IconButton color="gray" />
      <IconButton color="blue" />
      <IconButton color="red" />
      <IconButton color="green" />
    </div>
    `
  }))
  .add('icon variation', () => ({
    components: { IconButton },
    template: `
    <div>
      <IconButton type="insert" />
      <IconButton type="remove" />
      <IconButton type="close" />
    </div>
    `
  }))
  .add('onclick', () => ({
    components: { IconButton },
    data() {
      return {
        onClick: () => { console.log('clicked'); action('clicked') }
      }
    },
    template: `
    <IconButton :onClick="onClick" />
    `
  }))
  .add('isdisabled', () => ({
    components: { IconButton },
    data() {
      return {
        onClick: () => { console.log('clicked'); action('clicked') },
        isDisabled: true
      }
    },
    template: `
    <IconButton :onClick="onClick" :isDisabled="isDisabled" />
    `
  }))
  .add('isVisible', () => ({
    components: { IconButton },
    data() {
      return {
        onClick: () => { console.log('clicked'); action('clicked') },
        isVisible: false
      }
    },
    template: `
    <IconButton :onClick="onClick" :isVisible="isVisible" />
    `
  }))
// .add('type is submit', () => ({
//     components: { Button },
//     template: '<Button text="hello, world" type="submit" />'
//   }))
// .add('isDisabled is true', () => ({
//     components: { Button },
//     data() {
//       return {
//         isDisabled: true
//       }
//     },
//     template: '<Button text="hello, world" :isDisabled="isDisabled" />'
//   }))
;

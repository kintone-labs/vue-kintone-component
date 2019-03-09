import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import IconButton from '../components/IconButton';
import NotifyPopup from '../components/NotifyPopup';

storiesOf('IconButton')
    .add(
        'story as a template',
        () => `<kintone-icon-button />`
    )
    .add('color variation', () => ({
        components: { IconButton },
        template: `
    <div>
      <IconButton color="gray" />
      <IconButton color="blue" />
      <IconButton color="red" />
      <IconButton color="green" />
    </div>
    `,
    }))
    .add('icon variation', () => ({
        components: { IconButton },
        template: `
    <div>
      <IconButton type="insert" />
      <IconButton type="remove" />
      <IconButton type="close" />
    </div>
    `,
    }))
    .add('onclick', () => ({
        components: { IconButton },
        data() {
            return {
                onClick: () => {
                    console.log('clicked');
                    action('clicked');
                },
            };
        },
        template: `
    <IconButton :onClick="onClick" />
    `,
    }))
    .add('isdisabled', () => ({
        components: { IconButton },
        data() {
            return {
                onClick: () => {
                    console.log('clicked');
                    action('clicked');
                },
                isDisabled: true,
            };
        },
        template: `
    <IconButton :onClick="onClick" :isDisabled="isDisabled" />
    `,
    }))
    .add('isVisible', () => ({
        components: { IconButton },
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
    <IconButton :onClick="onClick" :isVisible="isVisible" />
    `,
    }));

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

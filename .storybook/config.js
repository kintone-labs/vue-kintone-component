import { configure } from '@storybook/vue';

import Vue from 'vue';

import Alert from '../src/components/Alert';
import Button from '../src/components/Button';
import IconButton from '../src/components/IconButton';
import NotifyPopup from '../src/components/NotifyPopup';

// TODO Register custom components as a global.
// Register custom components.
Vue.component('kintone-alert', Alert);
Vue.component('kintone-button', Button);
Vue.component('kintone-icon-button', IconButton);
Vue.component('kintone-notify-popup', NotifyPopup);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories');
    require('../src/stories/alert');
}

configure(loadStories, module);

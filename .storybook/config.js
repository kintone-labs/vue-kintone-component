import { configure } from '@storybook/vue';

import Vue from 'vue';

import Alert from '../src/components/Alert';
import Button from '../src/components/Button';
import IconButton from '../src/components/IconButton';
import NotifyPopup from '../src/components/NotifyPopup';
import Label from '../src/components/Label';
import Spinner from '../src/components/Spinner';

// TODO Register custom components as a global.
// Register custom components.
Vue.component('kintone-alert', Alert);
Vue.component('kintone-button', Button);
Vue.component('kintone-icon-button', IconButton);
Vue.component('kintone-notify-popup', NotifyPopup);
Vue.component('kintone-label', Label);
Vue.component('kintone-spinner', Spinner);

function loadStories() {
    // You can require as many stories as you need.
    require('../src/stories/alert');
    require('../src/stories/button');
    require('../src/stories/iconbutton');
    require('../src/stories/notifypopup');
    require('../src/stories/label');
    require('../src/stories/spinner');
}

configure(loadStories, module);

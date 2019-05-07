import { configure } from '@storybook/vue';

import Vue from 'vue';

import Alert from '../src/components/Alert';
import Button from '../src/components/Button';
import IconButton from '../src/components/IconButton';
import NotifyPopup from '../src/components/NotifyPopup';
import Label from '../src/components/Label';
import Spinner from '../src/components/Spinner';
import Checkbox from '../src/components/Checkbox';
import Text from '../src/components/Text';
import FieldGroup from '../src/components/FieldGroup';
// TODO Register custom components as a global.
// Register custom components.
Vue.component('kintone-alert', Alert);
Vue.component('kintone-button', Button);
Vue.component('kintone-icon-button', IconButton);
Vue.component('kintone-notify-popup', NotifyPopup);
Vue.component('kintone-label', Label);
Vue.component('kintone-spinner', Spinner);
Vue.component('kintone-checkbox', Checkbox);
Vue.component('kintone-text', Text);
Vue.component('kintone-field-group', FieldGroup);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(
        require.context(
            '../src/stories/',
            true,
            /.*\.jsx?$/
        )
    );
}

configure(loadStories, module);

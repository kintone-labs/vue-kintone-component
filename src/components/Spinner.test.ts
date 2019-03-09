import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Spinner from './Spinner.vue';

interface Props {
    isVisible?: boolean;
}
describe('Spinner', () => {
    function newSpinner(propsData: Props) {
        return mount(Spinner, { propsData });
    }

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                isVisible,
            } as Props;
            const wrapper = newSpinner(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );
});

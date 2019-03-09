import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import NotifyPopup from './NotifyPopup.vue';
import IconButton from './IconButton.vue';

interface Props {
    text: string;
    type?: string;
    isDisabled?: boolean;
    isVisible?: boolean;
}
describe('NotifyPopup', () => {
    function newNotifyPopup(propsData: Props) {
        return shallowMount(NotifyPopup, { propsData });
    }
    test('text attribute', () => {
        const wrapper = newNotifyPopup({
            text: 'Notify',
        } as Props);
        expect(wrapper.text()).toEqual('Notify');
    });

    test.each([
        ['error', 'red'],
        ['success', 'green'],
        ['infor', 'blue'],
        ['invalid', 'red'],
    ])(
        'type attribute with %s convert to iconClassName %s',
        (type, expected) => {
            const wrapper = newNotifyPopup({
                type,
                text: 'notify',
            } as Props);
            const icon = wrapper.find(IconButton);
            expect(icon.attributes().color).toEqual(
                expected
            );
            expect(icon.attributes().type).toEqual('close');
        }
    );

    test.each([[true], [false]])(
        'isVisible attribute = %s constrols rendering',
        isVisible => {
            const props = {
                isVisible,
                text: 'notify',
            } as Props;
            const wrapper = newNotifyPopup(props);
            expect(wrapper.isEmpty()).not.toBe(isVisible);
        }
    );

    test.skip('emit click event', () => {
        const props: Props = {
            text: 'notify',
        };
        const wrapper = newNotifyPopup(props);
        wrapper.trigger('click-close');
        expect(
            wrapper.emitted()['click-close']
        ).toHaveLength(1);

        wrapper.trigger('click');
        expect(wrapper.emitted()['click']).toHaveLength(1);
    });

    test.skip('not emit click event', () => {
        const props = {
            isDisabled: true,
            text: 'notify',
        };
        const wrapper = newNotifyPopup(props);
        wrapper.trigger('click');
        expect(wrapper.emitted().click).toHaveLength(1);
        expect(wrapper.attributes().isDisabled).toBe(true);

        // click-close is not emmited
        // when attribute isDisabled=true
        wrapper.trigger('click-close');
        expect(
            wrapper.emitted()['click-close']
        ).toHaveLength(0);
    });
});

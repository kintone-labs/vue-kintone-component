<template>
    <div
        v-if="isVisible"
        class="kuc-multiple-list kuc-list-outer"
        :class="className()"
    >
        <ListItem
            v-for="item in items"
            :key="item.id"
            :label="item.label"
            :isDisabled="item.isDisabled"
            :selected="isSelectedItem(item)"
            @click="!isDisabled && handleItemClick(item)"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from './ListItem.vue';
export default Vue.extend({
    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isVisible: {
            type: Boolean,
            default: true,
        },
        items: {
            type: Array,
            required: true,
        },
        values: {
            type: Array,
            default: [],
        },
    },
    methods: {
        className() {
            return this.isDisabled
                ? 'kuc-multiple-list-disable'
                : '';
        },
        isSelectedItem(item) {
            return (
                this.values.findIndex(
                    v => v === item.value
                ) >= 0
            );
        },
        handleItemClick(clickedItem) {
            const checked = this.values.findIndex(
                v => v === clickedItem.value
            );
            if (checked < 0) {
                this.$emit(
                    'change',
                    [].concat(
                        this.values,
                        clickedItem.value
                    )
                );
            } else {
                this.$emit(
                    'change',
                    this.values.filter(
                        v => v !== clickedItem.value
                    )
                );
            }
        },
    },
    components: {
        ListItem,
    },
});
</script>

<style scoped>
@import url('https://js.kintone.com/font-awesome/v4.7.0/css/font-awesome.min.css');
.kuc-multiple-list.kuc-list-outer {
    user-select: none;
    box-shadow: 1px 1px 12px #f5f5f5 inset,
        -1px -1px 12px #f5f5f5 inset;
}
.kuc-multiple-list.kuc-list-outer {
    max-width: 300px;
    max-height: 116px;
    overflow: auto;
    min-width: 200px;
}
.kuc-multiple-list.kuc-list-outer.kuc-multiple-list-disable {
    box-shadow: none;
    background-color: #dbdcdd;
}
</style>

<template>
    <div
        class="kuc-list-item"
        @click="!isDisabled && $emit('click')"
        :class="className()"
        :disabled="isDisabled"
    >
        <span class="kuc-icon-check">
            <i class="fa fa-check" aria-hidden="true" />
        </span>
        <span class="kuc-list-item-label">
            {{ label }}
        </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            requried: true,
        },
    },
    methods: {
        className() {
            return [
                this.selected
                    ? 'kuc-list-item-selected'
                    : '',
                this.isDisabled
                    ? 'kuc-list-item-disable'
                    : '',
            ].join(' ');
        },
    },
});
</script>

<style scoped>
.kuc-list-item {
    position: relative;
    font-size: 14px;
    padding: 1px 16px 8px 10px;
    line-height: 1;
    cursor: pointer;
}
.kuc-list-item-selected {
    background: none;
}
.kuc-list-item .kuc-icon-check {
    display: none;
}
.kuc-list-item .kuc-list-item-label {
    font-size: 13px;
    word-wrap: normal;
}
.kuc-list-item-selected span {
    color: #3498db;
}
.kuc-list-item-disable span {
    color: #888888;
}
.kuc-list-item-disable.kuc-list-item-selected
    .kuc-list-item-label,
.kuc-list-item-selected .kuc-list-item-label {
    margin-left: 16px;
}
.kuc-list-item-disable.kuc-list-item-selected
    .kuc-icon-check,
.kuc-list-item-selected .kuc-icon-check {
    display: block;
    font-size: 13px;
    line-height: 1.5;
    position: absolute;
}
</style>

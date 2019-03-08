<template>
    <button
        class="v-kuc-btn"
        :class="{
            submit: type === 'submit',
            normal: type === 'normal',
        }"
        v-if="isVisible"
        :disabled="isDisabled"
        @click="handleClick"
    >
        {{ text }}
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'normal',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isVisible: {
            type: Boolean,
            default: true,
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        handleClick: function() {
            this.onClick();
        },
    },
};
</script>

<style scoped>
.v-kuc-btn.normal,
.v-kuc-btn.submit {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 16px;
    white-space: nowrap;
}
.v-kuc-btn.normal:disabled,
.v-kuc-btn.submit:disabled,
.v-kuc-btn.normal:disabled:hover,
.v-kuc-btn.submit:disabled:hover {
    color: #bababa;
    border: 1px solid #e3e7e8;
    background-color: #dbdcdd;
    cursor: not-allowed;
    box-shadow: none;
}
.v-kuc-btn.normal {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 16px;
    min-width: 163px;
    height: 48px;
    outline: none;
    border: 1px solid #e3e7e8;
    background-color: #f7f9fa;
    box-shadow: 1px 1px 1px #fff inset;
    color: #3498db;
    text-align: center;
    line-height: 48px;
}
.v-kuc-btn.normal:hover {
    background-color: #c8d6dd;
    box-shadow: none;
    cursor: pointer;
}

.v-kuc-btn.submit {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 16px;
    min-width: 163px;
    height: 48px;
    outline: none;
    border: 1px solid #e3e7e8;
    background-color: #3498db;
    box-shadow: 1px 1px 1px #8ccbee inset;
    color: #fff;
    text-align: center;
    line-height: 48px;
}
.v-kuc-btn.submit:hover {
    background-color: #1d6fa5;
    cursor: pointer;
}
</style>

<template>
    <span v-if="isVisible" class="kuc-input-outer">
        <input
            type="text"
            :value="value"
            :disabled="isDisabled"
            @change="change"
            class="kuc-input-text"
        />
    </span>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        value: {
            type: String,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isVisible: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        change(event) {
            if (this.isDisabled) {
                return false;
            }
            this.$emit('change', event.target.value);
        },
    },
});
</script>

<style scoped>
.kuc-input-outer {
    position: relative;
    display: inline-block;
    vertical-align: top;
}
.kuc-input-text {
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0 8px;
    height: 48px;
    outline: none;
    border: 1px solid #e3e7e8;
    background-color: #fff;
    box-shadow: 4px 4px 12px #f5f5f5 inset,
        -4px -4px 12px #f5f5f5 inset;
    font-size: 14px;
}
.kuc-input-text:disabled {
    cursor: not-allowed;
    background-color: #e7e6e6;
    box-shadow: none;
}
</style>

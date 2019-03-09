<template>
    <div
        v-if="isVisible"
        class="kuc-label"
        @click="!isDisabled && $emit('click')"
    >
        {{ text }}
        <span v-if="isRequired" class="kuc-require">*</span>
    </div>
</template>

<script <script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true,
        },
        isRequired: {
            type: Boolean,
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
});
</script>

<style scoped>
.kuc-label {
    display: block;
    padding: 4px 8px;
    color: #333;
    font-size: 14px;
    margin: 0 -8px;
    white-space: nowrap;
}
.kuc-label .kuc-require {
    margin-left: 4px;
    color: #e74c3c;
    vertical-align: middle;
    font-size: 15px;
    line-height: 1;
}
</style>

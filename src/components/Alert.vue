<template>
    <div
        class="kuc-alert"
        :class="className"
        v-if="isVisible"
        @click="click"
    >
        {{ text }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'error',
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
    computed: {
        className() {
            if (this.type === 'error') {
                return 'bg-danger';
            } else if (this.type === 'success') {
                return 'bg-success';
            }
            return '';
        },
    },
    methods: {
        click() {
            if (this.isDisabled) {
                return;
            }
            this.$emit('click');
        },
    },
});
</script>

<style scoped>
.kuc-alert {
    position: relative;
    display: block;
    margin: 8px 0;
    padding: 4px 18px;
    background: #e74c3c;
    color: #f6f6f6;
}
.kuc-alert.bg-danger {
    background: #e74c3c;
}
.kuc-alert.bg-success {
    background: #91c36c;
}
</style>

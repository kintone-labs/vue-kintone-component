<template>
    <div class="kuc-fieldgroup">
        <span
            role="button"
            tabindex="0"
            :class="className()"
            @click="handleToggle()"
        >
            <span :class="arrowClassName()" />
            {{ name }}
        </span>
        <div class="kuc-fieldgroup-contents">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        name: {
            type: String,
            default: '',
        },
        toggle: {
            type: String,
            default: 'expand',
        },
    },
    methods: {
        arrowClassName() {
            return [
                'kuc-arrow',
                this.toggle === 'expand' ? 'down' : 'right',
            ]
                .join(' ')
                .trim();
        },
        className() {
            return [
                'kuc-fieldgroup-label',
                'label',
                this.toggle === 'expand'
                    ? 'expand'
                    : 'collapse',
            ]
                .join(' ')
                .trim();
        },
        handleToggle() {
            const newState =
                this.toggle === 'expand'
                    ? 'collapse'
                    : 'expand';
            this.$emit('change', newState);
        },
    },
});
</script>

<style scoped>
.kuc-arrow {
    color: #727272;
    position: relative;
    margin: 10px 8px 0 0;
}

.kuc-arrow::before {
    content: '';
    position: absolute;
    right: 0;
    width: 8px;
    height: 8px;
    border-top: solid 1px currentColor;
    border-right: solid 1px currentColor;
}

.kuc-arrow.right:before {
    top: 4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.kuc-arrow.down:before {
    top: 2px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}

.kuc-fieldgroup {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    max-width: 517px;
    margin: 4px 8px;
    padding: 0px 8px;
}

.kuc-fieldgroup-label {
    display: inline-block;
    margin: 12px 0 8px 8px;
    padding: 4px 8px 4px 24px;
    color: #333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
}

.kuc-fieldgroup-label:focus {
    outline: 0;
    border: 1px solid #3498db;
}

.kuc-fieldgroup-contents {
    margin-left: 0;
    white-space: nowrap;
    word-wrap: normal;
}

.kuc-fieldgroup-label.collapse + .kuc-fieldgroup-contents {
    display: none;
}
</style>

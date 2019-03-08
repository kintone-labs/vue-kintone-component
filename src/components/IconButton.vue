<template>
    <button
        class="kuc-icon-btn"
        :class="className"
        v-if="isVisible"
        :disabled="isDisabled"
        @click="handleClick"
    >
        <i :class="classType" />
    </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default {
    props: {
        type: {
            type: String,
            default: 'insert',
        },
        color: {
            type: String,
            default: 'gray',
        },
        size: {
            type: String,
            default: 'large',
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
        onChange: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        handleClick: function() {
            this.onClick();
        },
    },
    computed: {
        className() {
            const colors = ['gray', 'blue', 'red', 'green'];
            const color =
                colors.indexOf(this.color) === -1
                    ? 'gray'
                    : this.color;

            const className = [
                'kuc-icon-btn',
                this.classSize,
                this.type === 'remove' && color === 'gray'
                    ? 'hover-danger'
                    : '',
                color,
            ];

            return className.join(' ').trim();
        },
        classSize() {
            return this.size === 'small'
                ? 'small'
                : 'large';
        },
        classType() {
            switch (this.type) {
                case 'insert':
                    return 'fa fa-plus';
                case 'remove':
                    return 'fa fa-minus';
                case 'close':
                    return 'fa fa-times';
            }
        },
    },
};
</script>

<style scoped>
@import url('https://js.kintone.com/font-awesome/v4.7.0/css/font-awesome.min.css');
.kuc-icon-btn {
    border: none;
    border-radius: 50%;
    color: #9e9e9e;
    background-color: #eeeeee;
    padding: 0;
    cursor: pointer;
    outline: none;
}
.kuc-icon-btn:hover {
    color: #ffffff;
    background-color: #2d8dd6;
}
.kuc-icon-btn.hover-danger:hover {
    background-color: #e44235;
}
.kuc-icon-btn.large {
    width: 32px;
    height: 32px;
}
.kuc-icon-btn.small {
    width: 16px;
    height: 16px;
}
.kuc-icon-btn.small i {
    display: block;
    font-size: 8px;
}
.kuc-icon-btn.blue {
    color: #ffffff;
    background-color: #2d8dd6;
}
.kuc-icon-btn.blue:hover {
    background-color: #1a649b;
}
.kuc-icon-btn.red {
    color: #ffffff;
    background-color: #e44234;
}
.kuc-icon-btn.red:hover {
    background-color: #d03d30;
}
.kuc-icon-btn.green {
    color: #ffffff;
    background-color: #86bb61;
}
.kuc-icon-btn.green:hover {
    background-color: #5f973a;
}
.kuc-icon-btn:disabled,
.kuc-icon-btn:disabled:hover {
    color: #bababa;
    border: 1px solid #e3e7e8;
    background-color: #dbdcdd;
    cursor: not-allowed;
    box-shadow: none;
}
</style>

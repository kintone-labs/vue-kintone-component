<template>
    <div v-if="isVisible" class="kuc-dropdown-container">
        <div class="kuc-dropdown-sub-container">
            <div
                class="kuc-dropdown-outer"
                @click="handleDropdownClick"
            >
                <div
                    class="kuc-dropdown"
                    :class="disabledClass()"
                >
                    <div class="kuc-dropdown-selected">
                        <span
                            class="kuc-dropdown-selected-name"
                        >
                            <span v-if="index !== -1">
                                {{ selectedItemLabel }}
                            </span>
                            <span class="icon-arrow-down">
                                <i
                                    class="fa fa-angle-down"
                                    aria-hidden="true"
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div
                v-if="computedShowItem"
                class="kuc-list-outer"
            >
                <ListItem
                    v-for="item in items"
                    :key="item.key"
                    :selected="value === item.value"
                    :isDisabled="item.isDisabled"
                    :label="item.label"
                    @click="handleChangeItem(item)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from './ListItem.vue';
export default Vue.extend({
    props: {
        items: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            default: '',
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
    data() {
        return {
            showItems: false,
        };
    },
    methods: {
        disabledClass() {
            return this.isDisabled
                ? 'kuc-dropdown-disable'
                : '';
        },
        handleChangeItem(newItem) {
            this.computedShowItem = false;
            if (this.isDisabled) {
                return;
            }
            this.$emit('change', newItem);
        },
        handleDropdownClick() {
            if (this.isDisabled) {
                return;
            }
            this.$emit('click');
            this.computedShowItem = !this.showItems;
        },
    },
    computed: {
        index() {
            return this.items.findIndex(
                item => item.value === this.value
            );
        },
        selectedItemLabel() {
            return this.items[this.index].label;
        },
        computedShowItem: {
            get() {
                return this.showItems;
            },
            set(newVal) {
                this.showItems = newVal;
            },
        },
    },
    components: {
        ListItem,
    },
});
</script>

<style scoped>
@import url('https://js.kintone.com/font-awesome/v4.7.0/css/font-awesome.min.css');
.kuc-dropdown-outer {
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.kuc-dropdown {
    position: relative;
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    margin-right: 0;
    padding: 0 16px;
    min-width: 80px;
    max-width: 280px;
    height: 48px;
    border: 1px solid #e3e7e8;
    background-color: #f7f9fa;
    box-shadow: 1px 1px 1px #fff inset;
    color: #3498db;
    text-overflow: ellipsis;
}
.kuc-dropdown:hover {
    background-color: #f4f7f8;
    cursor: pointer;
}
.kuc-dropdown.kuc-dropdown-disable,
.kuc-dropdown.kuc-dropdown-disable:hover {
    cursor: not-allowed;
    border: none;
    background-color: #dbdcdd;
}
.kuc-dropdown.kuc-dropdown-disable
    .kuc-dropdown-selected-name {
    color: #888;
}
.kuc-dropdown-selected {
    min-width: 118px;
    height: 48px;
    padding-right: 48px;
}
.kuc-dropdown-selected-name {
    color: #3498db;
    font-size: 14px;
    line-height: 48px;
}
.kuc-dropdown-selected-name .icon-arrow-down {
    position: absolute;
    right: 15px;
}
.kuc-dropdown-selected-name .icon-arrow-down i {
    font-size: 22px;
    vertical-align: middle;
}
.kuc-dropdown-sub-container .kuc-list-outer {
    position: absolute;
    min-width: 280px;
    z-index: 2000;
    margin-top: -6px;
    padding: 12px 0 0 0;
    border: 1px solid #e3e7e8;
    background-color: #fff;
    box-shadow: 1px 1px 12px #f5f5f5 inset,
        -1px -1px 12px #f5f5f5 inset;
    line-height: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

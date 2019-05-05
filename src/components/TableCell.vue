<template>
    <div class="kuc-table-td">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.kuc-table-td:first-child {
    border-width: 0px 1px 1px 1px;
}

.kuc-table-td {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    vertical-align: top;
    padding: 8px;
}

.kuc-table-td {
    display: table-cell;
}
</style>

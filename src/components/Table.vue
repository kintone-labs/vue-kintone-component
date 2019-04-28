<template>
    <div class="kuc-table">
        <div class="kuc-table-thead">
            <div
                class="kuc-table-tr"
                v-if="header && header.length > 0"
            >
                <!-- num of header column is not change dynamically, so bind index to key -->
                <div
                    class="kuc-table-th"
                    v-for="(column, index) in header"
                    :key="index"
                >
                    <span class="kuc-header-label">{{
                        column
                    }}</span>
                </div>
            </div>
        </div>
        <div class="kuc-table-tbody">
            <TableRow v-for="row in data" :key="row.id">
                <slot :row="row"></slot>
                <div
                    v-if="actionButtonShown"
                    class="kuc-table-td action-group"
                >
                    <span class="kuc-table-row-icon-insert">
                        <IconButton
                            type="insert"
                            color="blue"
                            size="small"
                            @click="
                                $emit('insert-row', row.id)
                            "
                        />
                    </span>
                    <span>
                        <IconButton
                            v-if="data.length > 1"
                            type="remove"
                            color="gray"
                            size="small"
                            @click="
                                $emit('remove-row', row.id)
                            "
                        />
                    </span>
                </div>
            </TableRow>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TableRow from './TableRow.vue';
import IconButton from './IconButton.vue';
export default Vue.extend({
    props: {
        isVisible: {
            type: Boolean,
            default: true,
        },
        header: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            defalut: () => [],
        },
        actionButtonShown: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        TableRow,
        IconButton,
    },
});
</script>

<style scoped>
.kuc-table {
    display: table;
}

.kuc-table .kuc-table-thead {
    display: table-header-group;
}

.kuc-table .kuc-table-tr {
    display: table-row;
}

.kuc-table .kuc-table-th,
.kuc-table .kuc-table-td {
    display: table-cell;
}

.kuc-table .kuc-table-th {
    background-color: #3498db;
    border: 1px solid #3498db;
    line-height: 40px;
}

.kuc-table .kuc-header-label {
    color: #ffffff;
    font-size: 12px;
    padding: 4px 8px;
}

.kuc-table .kuc-table-tr .kuc-table-td:first-child {
    border-width: 0px 1px 1px 1px;
}

.kuc-table .kuc-table-tbody {
    display: table-row-group;
}

.kuc-table-td.action-group {
    border: none;
    padding: 20px 0 0 5px;
}

.kuc-table-row-icon-insert {
    margin-right: 5px;
}
</style>

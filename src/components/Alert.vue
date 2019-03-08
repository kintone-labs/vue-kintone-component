<template>
    <div class="v-kuc-alert"
    　:class ="{ 'bg-danger': type === 'error', 'bg-success': type === 'success'}"
    >
        {{ text }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
    props: {
        text: {
            type: String, required: true
        },
        type: {
            type: String, default: 'error'
        }  
    }

}
</script>

<style scoped>
.v-kuc-alert {
    position: relative;
    display: block;
    margin: 8px 0;
    padding: 4px 18px;
    background: #e74c3c;
    color: #f6f6f6;
}
.v-kuc-alert.bg-danger {
    background: #e74c3c;
}
.v-kuc-alert.bg-success {
    background: #91C36C;
}
</style>

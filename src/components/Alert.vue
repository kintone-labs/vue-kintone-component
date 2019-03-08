<template>
    <div class="v-kuc-alert">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
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
</style>

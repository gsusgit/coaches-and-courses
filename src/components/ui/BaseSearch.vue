<template>
  <form>
    <input
      type="search"
      @input="(event) => $emit('search', event.target.value)"
      :value="searchTerm"
      :placeholder="placeholder"
    />
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['searchTerm', 'placeholder'])
defineEmits(['search'])
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>

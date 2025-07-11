<template>
  <button class="base-button" type="submit">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String
})
</script>

<style scoped>
.base-button {
  width: 100%;
  background-color: #61227D;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
}
</style>

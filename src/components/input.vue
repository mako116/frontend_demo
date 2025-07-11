<template>
  <div class="base-input">
    <label :for="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :type="showPassword ? 'text' : type"
        :id="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span
        v-if="type === 'password'"
        class="eye-icon"
        @click="togglePassword"
      >
        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.359 11.238c.318-.466.567-.969.738-1.488a1 1 0 0 0-.13-.887C12.98 6.768 10.597 5 8 5s-4.98 1.768-5.967 3.863a1 1 0 0 0-.13.887 8.644 8.644 0 0 0 .738 1.488L1.146 13.146a.5.5 0 1 0 .708.708l12-12a.5.5 0 0 0-.708-.708l-1.787 1.787zM8 6c.852 0 1.674.257 2.373.712L6.712 10.373A3.993 3.993 0 0 1 8 6z"/>
          <path d="M8 2c2.761 0 5.259 1.535 6.655 3.72a1 1 0 0 1 0 1.56A8.651 8.651 0 0 1 8 13a8.651 8.651 0 0 1-6.655-5.72 1 1 0 0 1 0-1.56A8.651 8.651 0 0 1 8 2zm0 1C5.654 3 3.512 4.269 2.29 6c1.222 1.731 3.364 3 5.71 3s4.488-1.269 5.71-3C12.488 4.269 10.346 3 8 3z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.359 11.238c.318-.466.567-.969.738-1.488a1 1 0 0 0-.13-.887C12.98 6.768 10.597 5 8 5c-.893 0-1.765.25-2.5.712l1.293 1.293A2 2 0 1 1 8 10a2 2 0 0 1-1.777-1.014L1.146 13.146a.5.5 0 1 1-.708-.708l12-12a.5.5 0 0 1 .708.708l-1.787 1.787z"/>
          <path d="M11.273 9.273l1.236 1.236a8.651 8.651 0 0 1-10.018 0A1 1 0 0 1 2.29 6c1.222-1.731 3.364-3 5.71-3a8.651 8.651 0 0 1 4.315 1.21L11.273 6.727A3.993 3.993 0 0 0 8 6a3.993 3.993 0 0 0-2.373.712L11.273 9.273z"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  padding: 1.1rem;
  padding-right: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.eye-icon {
  position: absolute;
  right: 0;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8%;
  height: 100%;
  border-left: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.2s ease;
}

.eye-icon:hover {
  background-color: #e0e0e0;
  color: #333;
}

</style>

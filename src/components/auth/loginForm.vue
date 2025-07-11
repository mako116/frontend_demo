<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" type="email" required />
    <input v-model="password" placeholder="Password" type="password" required />
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { login } from '@/utils/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { login } from '../services/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    await login(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = 'Invalid credentials'
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 100px auto;
}
input {
  margin-bottom: 10px;
  padding: 10px;
}
.error {
  color: red;
}
</style>

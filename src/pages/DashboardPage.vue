<template>
  <div>
    <h1>Welcome to Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { logout } from '@/utils/auth'
import { useRouter } from 'vue-router'
// import { logout } from '../services/auth'

const router = useRouter()
const logoutHandler = () => {
  logout()
  router.push('/')
}
</script>

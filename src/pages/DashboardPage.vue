<template>
  <div class="dashboard-container">
    <aside :class="['sidebar', { 'sidebar-open': isDrawerOpen }]" >
      <div class="sidebar-header">
        <h2 class="logo">Team Achieve</h2>
        <button class="close-btn" @click="toggleDrawer" aria-label="Close sidebar">×</button>
      </div>

      <nav class="nav-menu">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Loans</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </nav>

      <button class="logout-btn" @click="logoutHandler">Logout</button>
    </aside>

    <div
      v-if="isDrawerOpen && isMobile"
      class="overlay"
      @click="toggleDrawer"
      aria-hidden="true"
    ></div>

    <main class="main-content">
      <header class="navbar">
        <button
          class="hamburger"
          @click="toggleDrawer"
          aria-label="Open sidebar"
          aria-expanded="isDrawerOpen"
        >
          ☰
        </button>
        <h1>Welcome to Dashboard</h1>
      </header>

      <section class="cards-container">
        <div class="card">
          <h3>Total Loans</h3>
          <p>₦500,000</p>
        </div>
        <div class="card">
          <h3>Active Users</h3>
          <p>120</p>
        </div>
        <div class="card">
          <h3>Pending Loans</h3>
          <p>25</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { logout } from '@/utils/auth'

const isDrawerOpen = ref(false)
const isMobile = ref(false)
const router = useRouter()

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

function logoutHandler() {
  logout()
  router.push('/')
}

function checkScreenSize() {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) isDrawerOpen.value = false
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Lora', serif;
  background-color: #f9fafb;
}

.sidebar {
  width: 260px;
  background-color: #61227D;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease-in-out;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  user-select: none;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: none;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  margin-bottom: 1.25rem;
}

.nav-menu a {
  color: #ddd;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-menu a:hover {
  color: white;
}

.logout-btn {
  background-color: white;
  color: #61227D;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #4d1b63;
  color: white;
}

.main-content {
  flex-grow: 1;
  padding: 2.5rem 3rem;
  overflow-y: auto;
}

.navbar {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.hamburger {
  font-size: 1.8rem;
  background: none;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  color: #61227D;
  display: none;
}

.navbar h1 {
  font-weight: 700;
  font-size: 1.9rem;
  color: #333;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgb(97 34 125 / 0.15);
  text-align: center;
  transition: box-shadow 0.3s;
  cursor: default;
}

.card:hover {
  box-shadow: 0 8px 20px rgb(97 34 125 / 0.3);
}

.card h3 {
  font-weight: 600;
  color: #61227D;
  margin-bottom: 1rem;
}

.card p {
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 998;
}

@media (max-width: 767px) {
  .dashboard-container {
    flex-direction: column;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    z-index: 999;
    box-shadow: 3px 0 10px rgba(0, 0, 0, 0.1);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }

  .close-btn {
    display: inline;
  }

  .hamburger {
    display: inline;
  }

  .main-content {
    padding: 1.5rem 1.5rem 3rem;
  }
}
</style>

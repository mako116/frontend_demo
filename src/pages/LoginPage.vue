 <template>
  <div class="login-wrapper">
     <div class="left-side bg-[#000] h-full">
      <img src="../assets/image 30.png" alt="Logo" class="logo" />
     <div class="left-content"> 
      <img src="../assets/image 31.png" alt="Banner" class="banner" />
       
        <h2 class="title">Team Achieve</h2>
        <p class="subtitle">Your perfect solution for funding your  desires</p>
      </div>
    </div>

     <div class="right-side">
      <div class="form-wrapper">
        <h1>Welcome Back</h1>
        <p class="instruction">Enter your email address and password to access your account.</p>

        <form @submit.prevent="handleLogin">
          <Input label="Email Address" v-model="email" type="email" />
          <Input label="Password" v-model="password" type="password" />

          <div class="form-options">
            <label class="checkbox">
              <input type="checkbox" v-model="rememberMe" /> Remember me
            </label>
            <router-link to="/forgot-password" class="forgot">Forgot Password?</router-link>
          </div>

          <Button text="Login" class="login-button" />
          <p class="signup-text">
            Don’t have an account? <a href="#">Signup</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/input.vue'
import { login } from '@/utils/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
 
// const email = ref('')
// const password = ref('')
// const rememberMe = ref(false)
// const router = useRouter()

// const handleLogin = async () => {
//   try {
//     await login(email.value, password.value)
//     router.push('/dashboard')
//   } catch (err) {
//     alert('Invalid credentials')
//   }
// }

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const router = useRouter()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert('Please enter both email and password')
    return
  }

   setTimeout(() => {
    // Fake login not a real one 
    // real is above uncommented
    console.log('Demo login success with', { email: email.value, password: password.value })
    router.push('/dashboard')
  }, 500)  
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;
}

.left-side {
  flex: 1;
   background-color: #F8EAFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  /* min-width: 300px; */
}

.logo {
  width: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  margin-right: auto;
}

.left-content {
  text-align: center;
  margin-top: 20px;
  /* margin-bottom: 2rem; */
}

.title {
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #61227D;
}

.subtitle {
  color: #5E5E5E;
  max-width: 300px;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 1.4;
}

.banner {
  width: 100%;
  /* max-width: 350px; */
  margin-bottom: 1rem;
}

.right-side {
  flex: 1;
  padding:0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-width: 300px;
}

.form-wrapper {
  /* max-width: 400px; */
  width: 100%;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
 color: #61227D;
  text-align: center;
}

.instruction {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  color: #666;
  text-align: center;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.checkbox {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
}

.forgot {
  color: #61227D;
  text-decoration: none;
  font-size: 0.9rem;
}

.login-button {
  background-color: #61227D;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
  width: 100%;
}

.login-button:hover {
  background-color: #4d1b63;
}

.signup-text {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.signup-text a {
  color: #61227D;
  text-decoration: none;
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .login-wrapper {
    flex-direction: column;
  }
  .left-side{
    display: none;
  }

  .left-side, .right-side {
    flex: unset;
    width: 100%;
    min-height: 50vh;
  }

  .right-side {
    padding: 0px;
  }

  .left-content {
    margin-top: 2rem;
  }
}

</style>

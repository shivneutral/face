<script setup lang="ts">
import { reactive, ref } from 'vue'

type FormState = {
  fullName: string
  email: string
  password: string
}

const form = reactive<FormState>({
  fullName: '',
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const message = ref('')

async function submitSignup() {
  isSubmitting.value = true
  message.value = 'Preparing your account...'

  try {
    await new Promise((resolve) => window.setTimeout(resolve, 900))

    message.value = 'Signup request ready. Connect this to your API endpoint next.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="page">
    <section class="card">
      <div class="intro">
        <p class="eyebrow">Join our platform</p>
        <h1>Create account</h1>
        <p class="subtitle">Start your journey in seconds with a clean signup experience.</p>
      </div>

      <form class="form" @submit.prevent="submitSignup">
        <label>
          <span>Full name</span>
          <input v-model="form.fullName" type="text" placeholder="Jane Doe" required />
        </label>

        <label>
          <span>Email address</span>
          <input v-model="form.email" type="email" placeholder="you@example.com" required />
        </label>

        <label>
          <span>Password</span>
          <input v-model="form.password" type="password" placeholder="At least 8 characters" required />
        </label>

        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Creating account...' : 'Sign up' }}
        </button>
      </form>

      <p v-if="message" class="message">{{ message }}</p>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #081225 0%, #183a5b 100%);
  color: #f5f7fb;
}

.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.card {
  width: min(100%, 460px);
  background: rgba(10, 18, 33, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
}

.intro {
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.75rem;
  color: #70b7ff;
}

h1 {
  margin: 0 0 8px;
  font-size: 2rem;
}

.subtitle {
  margin: 0;
  color: #b9c8dc;
  line-height: 1.5;
}

.form {
  display: grid;
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

input {
  width: 100%;
  border: 1px solid #2f4568;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 1rem;
  background: #0f1b2f;
  color: white;
  box-sizing: border-box;
}

input:focus {
  outline: 2px solid #70b7ff;
  outline-offset: 2px;
}

button {
  margin-top: 8px;
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4ea6ff, #3b82f6);
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.message {
  margin-top: 18px;
  color: #8fe1c2;
  min-height: 24px;
}
</style>

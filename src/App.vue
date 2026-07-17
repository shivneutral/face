<script setup lang="ts">
import { reactive, ref } from 'vue'

type LoginState = {
  email: string
  password: string
}

type SignupState = {
  fullName: string
  email: string
  password: string
}

const mode = ref<'login' | 'signup'>('login')

const loginForm = reactive<LoginState>({
  email: '',
  password: '',
})

const signupForm = reactive<SignupState>({
  fullName: '',
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const message = ref('')

function switchMode(next: 'login' | 'signup') {
  mode.value = next
  message.value = ''
}

async function submitLogin() {
  isSubmitting.value = true
  message.value = 'Signing you in...'

  try {
    await new Promise((resolve) => window.setTimeout(resolve, 900))

    message.value = 'Login request ready. Connect this to your API endpoint next.'
  } finally {
    isSubmitting.value = false
  }
}

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
        <p class="eyebrow">{{ mode === 'login' ? 'Welcome back' : 'Join our platform' }}</p>
        <h1>{{ mode === 'login' ? 'Log in' : 'Create account' }}</h1>
        <p class="subtitle">
          {{
            mode === 'login'
              ? 'Sign in to continue to your account.'
              : 'Start your journey in seconds with a clean signup experience.'
          }}
        </p>
      </div>

      <div class="tabs">
        <button
          type="button"
          class="tab"
          :class="{ active: mode === 'login' }"
          @click="switchMode('login')"
        >
          Login
        </button>
        <button
          type="button"
          class="tab"
          :class="{ active: mode === 'signup' }"
          @click="switchMode('signup')"
        >
          Sign up
        </button>
      </div>

      <form v-if="mode === 'login'" class="form" @submit.prevent="submitLogin">
        <label>
          <span>Email address</span>
          <input v-model="loginForm.email" type="email" placeholder="you@example.com" required />
        </label>

        <label>
          <span>Password</span>
          <input v-model="loginForm.password" type="password" placeholder="Your password" required />
        </label>

        <button type="submit" class="primary" :disabled="isSubmitting">
          {{ isSubmitting ? 'Signing in...' : 'Log in' }}
        </button>
      </form>

      <form v-else class="form" @submit.prevent="submitSignup">
        <label>
          <span>Full name</span>
          <input v-model="signupForm.fullName" type="text" placeholder="Jane Doe" required />
        </label>

        <label>
          <span>Email address</span>
          <input v-model="signupForm.email" type="email" placeholder="you@example.com" required />
        </label>

        <label>
          <span>Password</span>
          <input v-model="signupForm.password" type="password" placeholder="At least 8 characters" required />
        </label>

        <button type="submit" class="primary" :disabled="isSubmitting">
          {{ isSubmitting ? 'Creating account...' : 'Sign up' }}
        </button>
      </form>

      <p v-if="message" class="message">{{ message }}</p>
    </section>
  </main>
</template>

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userUserStore = defineStore('counter', () => {
  const jwt = ref('')
  const isLoggedIn = ref(false)
  const expiredIn = ref(0)
  const role = ref('')

  return { jwt, isLoggedIn, expiredIn, role }
})

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')


</script>

<template>
  <div class="is-flex is-justify-content-center	is-align-items-center mt-6">
    <form class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="e.g. alex@example.com" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="********" />
        </div>
      </div>

      <button type="submit" class="button is-primary">Sign in</button>
    </form>
  </div>
</template>

<style scoped>
  .my-auto {
    margin: auto;
  }
</style>

<script setup>
import { useEmployeeStore } from '@/stores/employee'
import { useRoute } from 'vue-router'
const route = useRoute()

const employeeStore = useEmployeeStore()
employeeStore.findEmployeeById(route.params.id)

function confirmDelete() {
  document.getElementById('modal').classList.add('is-active')
}

function closeModel() {
  document.getElementById('modal').classList.remove('is-active')
}
</script>

<template>
<div id="modal" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
      <p class="block">Are you sure you want to delete this Employee ({{ employeeStore.employee.name }})?</p>
      <div class="buttons my-2">
        <button class="button is-danger">Yes</button>
        <button class="button" @click="closeModel">No</button>
      </div>
    </div>
  </div>
</div>

  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">Employee</p>
      <p class="subtitle">{{ employeeStore.employee.name }}</p>
    </div>
  </section>
  <section class="container is-fluid mt-6">
    <div class="card">
  <div class="card-content">
    <div class="content">
      <p>Name: {{ employeeStore.employee.name }}</p>
      <p>Phone: {{ employeeStore.employee.phone }}</p>
      <p>Note: {{ employeeStore.employee.note }}</p>
    </div>
  </div>
  <footer class="card-footer buttons has-addons">
    <router-link :to="{name:'barbershop-detail', params: {id: employeeStore.employee.barbershopId}}"  class="card-footer-item button is-primary">View barbershop</router-link>
    <router-link class="card-footer-item button is-warning">Edit</router-link>
    <button @click="confirmDelete" class="card-footer-item button is-danger">Delete</button>
  </footer>
</div>
  </section>
</template>

<script setup>
import { useBarbershopStore } from '@/stores/barbershop'

const barbershopStore = useBarbershopStore()
barbershopStore.getBarbershops()
</script>

<template>
  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">Barbershops</p>
      <p class="subtitle">All barbershops registered</p>
    </div>
  </section>
  <section class="container is-fluid mt-6">
    <div class="table-container">
      <table class="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="barbershop in barbershopStore.barbershops" :key="barbershop.id">
            <td>{{ barbershop.name }}</td>
            <td>{{ barbershop.email }}</td>
            <td>{{ barbershop.phone }}</td>
            <td><input type="checkbox" name="active" id="active" disabled v-model="barbershop.active" /></td>
            <td>
              <router-link
                :to="{ name: 'barbershop-detail', params: { id: barbershop.id } }"
                class="button is-warning mx-1"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

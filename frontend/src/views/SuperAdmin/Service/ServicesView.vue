<script setup>
import { useServiceStore } from '@/stores/service'
import { useRoute } from 'vue-router'
const route = useRoute()

const serviceStore = useServiceStore()
serviceStore.findServiceById(route.params.id)

function confirmDelete() {
  document.getElementById('modal').classList.add('is-active')
}

function closeModel() {
  document.getElementById('modal').classList.remove('is-active')
}

function deleteService(id) {
  serviceStore.deleteService(id)
  closeModel()
}
</script>

<template>
  <div id="modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p class="block">
          Are you sure you want to delete this Service ({{ serviceStore.service.title }})?
        </p>
        <div class="buttons my-2">
          <button class="button is-danger" @click="deleteService(serviceStore.service.id)" >Yes</button>
          <button class="button" @click="closeModel">No</button>
        </div>
      </div>
    </div>
  </div>

  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">Service</p>
      <p class="subtitle">{{ serviceStore.service.title }}</p>
    </div>
  </section>
  <section class="container is-fluid mt-6">
    <div class="card my-6">
      <div class="card-image">
    <figure class="image is-16by9">
      <img
        :src="serviceStore.service.photo"
        :alt="serviceStore.service.title"
      />
    </figure>
  </div>
      <div class="card-content">
        <div class="content">
          <p>Name: {{ serviceStore.service.title }}</p>
          <p>Description: {{ serviceStore.service.description }}</p>
          <p>Price: R$ {{ serviceStore.service.price }}</p>
          <p>Time: {{ serviceStore.service.time }} minutes</p>
          <p>Active: <input type="checkbox" :checked="serviceStore.service.active" disabled /></p>
        </div>
      </div>
      <footer class="card-footer buttons has-addons">
        <router-link
          :to="{ name: 'barbershop-detail', params: { id: serviceStore.service.barbershopId } }"
          class="card-footer-item button is-primary"
          >View barbershop</router-link
        >
        <router-link class="card-footer-item button is-warning">Edit</router-link>
        <button @click="confirmDelete" class="card-footer-item button is-danger">Delete</button>
      </footer>
    </div>
  </section>
</template>

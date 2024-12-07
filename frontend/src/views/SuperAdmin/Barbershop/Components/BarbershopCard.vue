<script setup>
import { useBarbershopStore } from '@/stores/barbershop'

const barbershopStore = useBarbershopStore()

defineProps({
  barbershop: {
    type: Object,
    required: true,
  },
})

function confirmDelete() {
  document.getElementById('modal').classList.add('is-active')
}

function closeModel() {
  document.getElementById('modal').classList.remove('is-active')
}

function deleteBarbershop(id) {
  barbershopStore.deleteBarbershop(id)
  closeModel()
}
</script>

<template>
  <div id="modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p class="block">
          Are you sure you want to delete this barbershop ({{ barbershop.name }})?
        </p>
        <div class="buttons my-2">
          <button class="button is-danger" @click="deleteBarbershop(barbershop.id)">Yes</button>
          <button class="button" @click="closeModel">No</button>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="barbershop.banner" :alt="barbershop.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="barbershop.icon" :alt="barbershop.name" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ barbershop.name }}</p>
        </div>
      </div>

      <div class="content">
        <p>Email: {{ barbershop.email }}</p>
        <p>Phone: {{ barbershop.phone }}</p>
        <p>Address: {{ barbershop.address }}</p>
        <p>Color: <input type="color" :value="barbershop.color" disabled /></p>
        <p>
          Active:
          <input class="" type="checkbox" :checked="barbershop.active" disabled />
        </p>
        <time :datetime="barbershop.createdAt">{{ barbershop.createdAt }}</time>
      </div>
    </div>
    <footer class="card-footer buttons has-addons">
      <router-link class="card-footer-item button is-warning">Edit</router-link>
      <button @click="confirmDelete" class="card-footer-item button is-danger">Delete</button>
    </footer>
  </div>
</template>

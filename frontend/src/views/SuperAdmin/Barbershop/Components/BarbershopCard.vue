<script setup>
defineProps({
  barbershop: {
    type: Object,
    required: true
  }
})
</script>


<template>
<div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img
                  :src="barbershop.banner"
                  :alt="barbershop.name"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      :src="barbershop.icon"
                      :alt="barbershop.name"
                    />
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
                <p>Color: <input type="color" :value="barbershop.color" disabled></p>
                <p>
                  Active:
                    <input class="" type="checkbox" :checked="barbershop.active" disabled/>
                </p>
                <time :datetime="barbershop.createdAt">{{ barbershop.createdAt }}</time>
              </div>
            </div>
          </div>
</template>

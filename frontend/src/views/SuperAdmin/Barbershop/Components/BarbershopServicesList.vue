<script setup>
defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="table-container">
      <table class="table is-striped is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Time</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" :key="service.id">
            <td>{{ service.title }}</td>
            <td>R$ {{ service.price }}</td>
            <td>{{ service.time }} Minutes</td>
            <td><input type="checkbox" name="active" id="active" :checked="service.active" disabled></td>
            <td>
              <router-link
                :to="{ name: 'service-detail', params: { id: service.id } }"
                class="button is-warning mx-1"
                >Details</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

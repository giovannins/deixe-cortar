<script setup>
defineProps({
  employees: {
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
            <th>Name</th>
            <th>Phone</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.note }}</td>
            <td>
              <router-link
                :to="{ name: 'employee-detail', params: { id: employee.id } }"
                class="button is-warning mx-1"
                >Details</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', () => {
  const services = ref([])
  const service = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  function getServices() {
    isLoading.value = true
    fetch('http://localhost:3000/api/services')
      .then((response) => response.json())
      .then((data) => {
        services.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function findServiceById(id) {
    isLoading.value = true
    fetch(`http://localhost:3000/api/services/${id}`)
      .then((response) => response.json())
      .then((data) => {
        service.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function deleteService(id) {
    console.error('deleteService', id)
  }

  return { services, service, isLoading, error, getServices, deleteService, findServiceById }
})

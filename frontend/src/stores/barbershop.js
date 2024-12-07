import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBarbershopStore = defineStore('barbershop', () => {
  const barbershops = ref([])
  const barbershop = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  function getBarbershops() {
    isLoading.value = true
    fetch('http://localhost:3000/api/barbershops')
      .then((response) => response.json())
      .then((data) => {
        barbershops.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  /**
   * Fetches a barbershop by its ID and updates the state with the retrieved data.
   *
   * @param {number|string} id - The ID of the barbershop to fetch.
   * @param {boolean} [withEmployees=false] - Whether to include employees in the response.
   * @param {boolean} [withServices=false] - Whether to include services in the response.
   * @returns {void}
   */
  function findBarbershopById(id, withEmployees = false, withServices = false) {
    isLoading.value = true
    fetch(`http://localhost:3000/api/barbershops/${id}?withEmployees=${withEmployees}&withServices=${withServices}`)
      .then((response) => response.json())
      .then((data) => {
        barbershop.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function deleteBarbershop(id) {
    console.error('deleteBarbershop', id)
  }

  return { barbershops, barbershop, isLoading, error, getBarbershops, deleteBarbershop, findBarbershopById }
})

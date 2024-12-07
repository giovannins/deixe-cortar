import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref([])
  const employee = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  function getEmployees() {
    isLoading.value = true
    fetch('http://localhost:3000/api/employees')
      .then((response) => response.json())
      .then((data) => {
        employees.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function findEmployeeById(id) {
    isLoading.value = true
    fetch(`http://localhost:3000/api/employees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        employee.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function findEmployeeByBarbershopId(id) {
    isLoading.value = true
    fetch(`http://localhost:3000/api/employees/barbershop/${id}`)
      .then((response) => response.json())
      .then((data) => {
        employee.value = data
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  function deleteEmployee(id) {
    console.error('deleteEmployee', id)
  }

  return { employees, employee, isLoading, error, getEmployees, deleteEmployee, findEmployeeById, findEmployeeByBarbershopId }
})

<script setup>
import { useBarbershopStore } from '@/stores/barbershop'
import { useRoute } from 'vue-router'
import BarbershopCard from './Components/BarbershopCard.vue';
import BarbershopEmployeesList from './Components/BarbershopEmployeesList.vue';
import BarbershopServicesList from './Components/BarbershopServicesList.vue';
import { ref } from 'vue';
const route = useRoute()

const barbershopStore = useBarbershopStore()
const barbershopId = route.params.id
barbershopStore.findBarbershopById(barbershopId, true, true)

const tabSelector = ref(0)

function setSelector(index) {
  tabSelector.value = index
}

</script>
<template>
  <div v-if="barbershopStore.isLoading" class="is-flex is-justify-content-center my-6">
    <span class="loader is-size-1"></span>
  </div>
  <div v-if="!barbershopStore.isLoading">
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">{{ barbershopStore.barbershop.name }}</p>
      </div>
    </section>
    <section class="container is-fluid my-6">
      <div class="columns">
        <div class="column is-3" id="dataNav">
          <aside class="menu">
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
              <li class="my-2"><a @click="setSelector(0)" :class="tabSelector === 0 ? 'is-active' : ''">Barbershop</a></li>
              <li class="my-2"><a @click="setSelector(1)" :class="tabSelector === 1 ? 'is-active' : ''">Employees</a></li>
              <li class="my-2"><a @click="setSelector(2)" :class="tabSelector === 2 ? 'is-active' : ''">Services</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9" id="dataShow">
          <BarbershopCard v-if="tabSelector === 0" :barbershop="barbershopStore.barbershop" />
          <BarbershopEmployeesList v-if="tabSelector === 1" :employees="barbershopStore.barbershop.employees" />
          <BarbershopServicesList v-if="tabSelector === 2" :services="barbershopStore.barbershop.services" />
        </div>
      </div>
    </section>
  </div>
</template>

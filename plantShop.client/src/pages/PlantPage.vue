<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <img class="card-img-top" :src="plant.img" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ plant.name }}
          </h4>
          <p class="card-text">
            {{ plant.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { plantsService } from '../services/PlantsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await plantsService.getPlantById(route.params.plantId)
    })
    return {
      plant: computed(() => AppState.activePlant)
    }
  }
}
</script>

<style scoped>
.card{
background-image: linear-gradient(#64c28b,#4b8e69);
border-radius: 1.5rem;
}
</style>

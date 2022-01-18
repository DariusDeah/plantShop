<template>
  <h1>FaVSS</h1>
  <div class="row" v-if="favorites?.itemIds.includes(plant.id) === true">
    <Plants v-for="p in plants" :key="p.id" :plant="p" v- />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { plantsService } from '../services/PlantsService'
export default {
  setup() {
    onMounted(async() => {
      await plantsService.getPlants('')
    })

    return {
      plants: computed(() => AppState.plants),
      favorites: computed(() => AppState.favorites)
    }
  }
}
</script>

<style>

</style>

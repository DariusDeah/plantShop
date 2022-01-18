<template>
  <div class="row p-5 ">
    <Plants v-for="p in plants" :key="p.id" :plant="p" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { plantsService } from '../services/PlantsService'
export default {
  setup() {
    onMounted(async() => {
      await plantsService.getPlants('category=New')
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

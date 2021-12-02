<template>
  <div class="container ">
    <div class="row">
      <div class="col-lg-12 col d-flex  justify-content-between  header line-btm">
        <h1 class="  fw-bold ">
          Plant Shop
        </h1>
        <h3 class="selectable" @click="getPlantsByQuery('category=Indoor')">
          Indoor
        </h3>
        <h3 class="selectable" @click="getPlantsByQuery('category=Outdoor')">
          Outdoor
        </h3>
        <h3 class="selectable" @click="getPlantsByQuery('category=New')">
          New
        </h3>
        <h3 class="selectable" @click="getPlantsByQuery('category=Popular')">
          Popular
        </h3>
        <h3 class="selectable" @click="getPlantsByQuery('')">
          All
        </h3>
      </div>
    </div>
  </div>
  <div class="container-fluid pt-4">
    <div class=" bg-primary d-flex p-3 justify-content-between text-light">
      <h4 class="selectable">
        Plants
      </h4>
      <h4 class="selectable">
        Accessories
      </h4>
      <h4 class="selectable">
        Kits
      </h4>
      <h4 class="selectable">
        Starters
      </h4>
    </div>
  </div>
  <div class="container">
    <div class="row p-5 ">
      <Plants v-for="p in plants" :key="p.id" :plant="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { plantsService } from '../services/PlantsService'
export default {
  setup() {
    onMounted(async() => {
      await plantsService.getPlants()
    })
    return {
      plants: computed(() => AppState.plants),
      async getPlantsByQuery(query) {
        await plantsService.getPlants(query)
      }
    }
  }
}
</script>

<style>
/* .shop-hero{
  background-image: url(src/assets/img/kiki-siepel-rZPk8H4v1d0-unsplash.jpg);
  background-size:contain;
    height: 80vh;
    background-position: center;
    background-repeat: no-repeat;
} */
.page-title{
  text-decoration: underline green;
}
</style>

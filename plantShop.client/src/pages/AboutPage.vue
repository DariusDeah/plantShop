<template>
  <div class="container ">
    <h1>ABOUT PAGE YUHH</h1>
    <div class="row">
      <div class="col-12 d-flex header">
        <h1 class="text-plant-green fw-bold page-title">
          Art
        </h1>
        <h3 class="selectable" @click="getArtByQuery('category=New')">
          New
        </h3>
        <h3 class="selectable" @click="getArtByQuery('category=Outdoor')">
          Outdoor
        </h3>
        <h3 class="selectable" @click="getArtByQuery('')">
          All
        </h3>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row p-5 ">
      <Art v-for="a in arts" :key="a.id" :art="a" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { artsService } from '../services/ArtsService'
export default {
  setup() {
    onMounted(async() => {
      await artsService.getArts()
    })
    return {
      arts: computed(() => AppState.arts),
      async getArtByQuery(query) {
        await artsService.getArts(query)
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

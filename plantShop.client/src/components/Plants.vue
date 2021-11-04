<template>
  <div class="col-sm-6 col-lg-4 p-1">
    <div class="card card-line m-3 card-size mp-2">
      <div v-if="favorites?.itemIds.includes(plant.id) === true">
        <i class="mdi mdi-heart fs-1 ps-1 btn text-danger"></i>
      </div>
      <div v-else>
        <i class="mdi mdi-heart-plus-outline fs-1 ps-1 btn text-danger " @click="addToFavs(plant.id)"></i>
      </div>
      <router-link :to="{name:'Plant',params:{plantId:plant.id}}">
        <img class=" img-fluid img selectable" :src="plant.imgs[0]" alt="">
      </router-link>
      <div class="card-body bg">
        <h4 class="card-title">
          {{ plant.name }}
        </h4>
        <div>
          ${{ plant.price }}

          <i class="mdi mdi-cart-plus fs-3 btn btn-dark p-1 "></i>
        </div>
      </div>
    </div>
    <div class="page-line"></div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { favoritesService } from '../services/FavoritesService'
export default {
  props: {
    plant: { type: Object, required: true }
  },
  setup(props) {
    return {
      props,
      favorites: computed(() => AppState.favorites),
      async addToFavs(plantId) {
        await favoritesService.addFavs(plantId, AppState.account._id)
      }
    }
  }

}
</script>

<style   >
.card-size{
  height: inherit;
}
.mdi-heart{
  position: absolute;
z-index: 1;
}
.mdi-heart-plus-outline{
  position: absolute;
z-index: 1;
}
.mdi-cart-plus{
  position: absolute;
 bottom: 6rem;
 right: 0.5rem;
  z-index: 2;
}
.mdi-cart-plus:hover{
  background-color: white !important;
  color: black !important;
}

.card{
  border: none;
  max-height: 100%;
  max-width: 100%;
}
.card img{
  object-fit: scale-down;
height: 100%;
}
.card-body{
  background-color: rgba(204, 203, 203, 0.13);
}
.card-line:hover{
  border-bottom: solid black 2.5px ;
}
/* .card:hover{
background-color: black;
} */

.mdi-heart:hover{
  color: #fd0101 !important;
}
.mdi-heart-plus-outline:hover{
  color: #fd0101 !important;
}
</style>

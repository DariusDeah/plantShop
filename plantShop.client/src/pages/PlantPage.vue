<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-lg-6 p-5" v-if="plant">
        <div class="row  ">
          <div class="col-lg-3  img-fluid  side-img p-2 " v-if="plant">
            <img :src="plant.imgs[0]" alt="" class="card my-2 selectable">
            <img :src="plant.imgs[1]" alt="" class="card my-2 selectable">
            <img :src="plant.imgs[2]" alt="" class="card my-2 selectable">
            <img :src="plant.imgs[3]" alt="" class="card my-2 selectable">
            <img :src="plant.imgs[4]" alt="" class="card my-2 selectable">
          </div>
          <div class="col-lg-8">
            <img :src="plant.imgs" alt="" class="img-fluid  p-2">
            <p class="text-light fw-bold">
              <span class="category " v-if="plant">
                {{ plant.category }}
              </span>
            </p>
            <span class="category" v-if="plant">
              {{ plant.category }}
            </span>
          </div>
        </div>
      </div>

      <div class="col-lg-6 details-padding mt-5 ">
        <div class="row line-btm">
          <h1>{{ plant.name }}</h1>
          <h2>${{ plant.price }}</h2>
        </div>
        <div class="row">
          <button class="btn cart-btn text-white p-3 mt-4 m fw-bold">
            ${{ plant.price }} - Add to cart
          </button>
        </div>

        <div class="row my-4 line-btm pb-3">
          <div class="col-lg-3 line-right text-center ">
            <h5>Details</h5>
          </div>
          <div class="col-lg-9">
            {{ plant.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur nostrum quaerat ratione voluptates ut soluta officia corporis, sequi reiciendis? Iusto voluptatum, molestias sed sequi eveniet esse dolor consequatur natus corporis debitis doloremque odit, sunt sint. Eum repudiandae minus magnam! Eos ducimus culpa fugiat esse eius vel enim quas deleniti.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h3>Reviews</h3>
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
.cart-btn{
background-image: linear-gradient(#2ba85f,#20a35b);
}
.line-right{
  border-right: solid 2px black;
}
.line-btm{
border-bottom: solid .5px rgb(184, 182, 182);

}
.category{
  background-color: rgb(158, 155, 155);
  padding: 10px;
}
.side-img{
  object-fit: contain;
  width: 10vw;
  height: fit-content;
}
@media only screen and (min-width: 800px) {
  .details-padding{
    padding-right: 12rem !important;
  }

}
</style>

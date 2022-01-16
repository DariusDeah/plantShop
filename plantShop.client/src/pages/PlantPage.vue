<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-lg-6 p-5" v-if="plant">
        <div class="row  ">
          <div class="col-lg-3 img-fluid side-img p-2 " v-if="plant.imgs ">
            <img :src="plant.imgs" alt="" class="card my-2 selectable" @click=" changeImage(0)">
            <img :src="plant.imgs[1]" alt="" class="card my-2 selectable" @click=" changeImage(1)">
            <img :src="plant.imgs[2]" alt="" class="card my-2 selectable" @click=" changeImage(2)">
            <img :src="plant.imgs[3]" alt="" class="card my-2 selectable" @click=" changeImage(3)">
            <img :src="plant.imgs[4]" alt="" class="card my-2 selectable" @click=" changeImage(4)">
          </div>
          <div class="col-lg-8" v-if="plant.imgs">
            <!-- TODO v-if the current plant id is in the user favorties -->
            <i class="mdi mdi-heart fs-1 text-danger ps-3" v-if="favorites?.itemIds.includes(plant.id) === true"></i>
            <i class="mdi mdi-heart-plus-outline fs-1 ps-1 btn text-danger " v-else></i>
            <img :src="currentImg" alt="" class="img-fluid p-2" id="current-img">
            <div class="row ps-3">
              <div class="col-4 p-0">
                <p class="text-light fw-bold pt-2">
                  <span class="category text-light " v-if="plant.category">
                    {{ plant.category[0] }}
                  </span>
                </p>
              </div>
              <div class="col-4">
                <p class="text-light fw-bold  pt-2">
                  <span class="category text-light " v-if="plant.category.length > 1">
                    {{ plant.category[1] }}
                  </span>
                </p>
              </div>
              <div class="col-4">
                <p class="text-light fw-bold ps-2 pt-2">
                  <span class="category text-light" v-if="plant.category.length >2">
                    {{ plant.category[2] }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 details-padding mt-5 ">
        <div class="row line-btm">
          <h1>{{ plant.name }}</h1>
          <h2>${{ plant.price }}</h2>
        </div>
        <div class="row">
          <button class="btn cart-btn text-white p-3 mt-4 m fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addToCart()">
            ${{ plant.price }} - Add to cart
          </button>
        </div>
        <div class="modal fade x" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Cart <i class="mdi mdi-cart fs-2"></i>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- TODO v-for items in cart -->
              </div>
              <div class="modal-footer ">
                <button type="button" class="btn btn-secondary text-light" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn cart-btn text-light">
                  Go to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4 line-btm pb-3">
          <div class="col-lg-3 line-right text-center ">
            <h5>Details</h5>
          </div>
          <p class="col-lg-9  ">
            {{ plant.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur nostrum quaerat ratione voluptates ut soluta officia corporis, sequi reiciendis? Iusto voluptatum, molestias sed sequi eveniet esse dolor consequatur natus corporis debitis doloremque odit, sunt sint. Eum repudiandae minus magnam! Eos ducimus culpa fugiat esse eius vel enim quas deleniti.
          </p>
        </div>
        <div class="row" v-if="plant.details">
          <div class="col-3">
            <i class="mdi mdi-sprout fs-2 text-plant-green"></i> <h5>{{ plant.details.days }}</h5>
          </div>
          <div class="col-3">
            <i class="mdi mdi-water fs-2 text-primary"></i>
            <h5>{{ plant.details.water }}</h5>
          </div>
          <div class="col-3">
            <h5>Size:</h5>
            <h4>{{ plant.details.size }}</h4>
          </div>

          <div class="col-3">
            <h5>Height:</h5>
            <h4>{{ plant.details.height }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
    </div>
    <h3>
      Reviews
      <button class="btn btn-primary text-white fw-bold">
        + leave a review
      </button>
    </h3>

    <div class="row" v-if="reviews[0]">
      <div class="card-body p-3 overflow-auto inner-scroll" style="height:100vh" v-if="reviews[0].plantId === plant.id">
        <Reviews v-for="r in reviews" :key="r.id" :reviews="r" />
      </div>
    </div>
    <div class="row" v-else>
      <div class="card-body p-3 overflow-auto inner-scroll" style="height:100vh">
        <h3>There are currently no reviews for this plant why not add one?</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { plantsService } from '../services/PlantsService'
import { reviewsService } from '../services/ReviewsService'
import { cartService } from '../services/CartService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
export default {
  setup() {
    const route = useRoute()
    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line prefer-const
    onMounted(async() => {
      await plantsService.getPlantById(route.params.plantId)
      await reviewsService.getReviewsByPlant(route.params.plantId)
    })

    return {
      plant: computed(() => AppState.activePlant),
      reviews: computed(() => AppState.reviews),
      currentImg: computed(() => AppState.currentImg),

      async changeImage(i) {
        try {
          await plantsService.changeImg(i)
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      async addToCart() {
        try {
          await cartService.addCart(route.params.plantId, AppState.account._id)
        } catch (error) {
          Pop.toast('error', error)
        }
      }
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
.x{
transform: translateX(30rem) !important;
}

</style>

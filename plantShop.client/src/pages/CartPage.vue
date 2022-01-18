<template>
  <container class="container d-flex">
    <div class="col-md-6">
      <div class="card text-start|center|end">
        <div class="card-body">
          <h4 class="card-title">
            Title
          </h4>
          <p v-if="item" class="card-text">
            <Cart v-for="i in item" :key="i.id" :item="i" />
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6 p-3">
      <!-- <h4 class="text-center ">
        ~ Order Summary ~
      </h4> -->
      <div class="card" v-if="item">
        <div class="card-body">
          <h4 class="card-title text-center btm-line">
            ~ Order Summary ~
          </h4>
          <h5 class="card-text btm-line p-2">
            <br />
            <div class="d-flex justify-content-between  pb-3">
              <span>{{ item?.length }} Items</span> ${{ cart?.subTotal }}
            </div>
            <br />
            <div class="d-flex justify-content-between pb-3 ">
              <span> Shipping </span> ${{ Math.round((cart?.subTotal / 6) * .15) }}
            </div>
          </h5>
          <div class="d-flex justify-content-between pb-3">
            <span class="display-6"> Total</span>
            <span class="display-6">${{ cart?.subTotal + (cart?.subTotal / 6) * .15 }}</span>
          </div>
          <button class="btn cart-btn text-white p-3 mt-4 m fw-bold">
            <router-link :to="{ name: 'Payment' }">
              Proceed to Checkout
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { cartService } from '../services/CartService'
import { AppState } from '../AppState'
export default {
  name: '',
  setup() {
    onMounted(async() => {
      await cartService.getCart(AppState.account._id)
    })
    return {
      item: computed(() => AppState.cart?.item),
      cart: computed(() => AppState.cart)
    }
  }
}
</script>

<style lang="css" scoped="true" >
.btm-line{
  border-bottom: .1rem solid black;
  padding-bottom: .5rem
}
.cart-btn{
background-image: linear-gradient(#2ba85f,#20a35b);
width:100%
}
</style>

<template>
  <div class="col-sm-6 col-lg-3 p-1">
    <div class="card card-size   m-2">
      <router-link :to="{name:'Plant',params:{plantId:plant.id}}">
        <i class="mdi mdi-heart fs-2 ps-1"></i>
        <img class=" img-fluid p-3  img selectable " :src="plant.img" alt="">
      </router-link>
      <div class="card-body">
        <h4 class="card-title">
          {{ plant.name }}
        </h4>
        <div>
          <p class="card-text fs-2 fw-normal">
            $ {{ plant.price }}
          </p>

          <i class="mdi mdi-cart-plus fs-3 btn btn-dark p-1 "></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plant: { type: Object, required: true }
  },
  setup(props) {
    return {
      props
    }
  }

}
</script>

<style >
.card-size{
  height: inherit;
}
.mdi-heart{
  position: absolute;
z-index: 1;
}
.mdi-cart-plus{
  position: absolute;
 bottom: 2rem;
 right: 2rem;
}
</style>

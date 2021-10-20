<template>
  <div class="col-sm-6 col-lg-4 p-1">
    <div class="card card-line m-3 card-size   mp-2">
      <i class="mdi mdi-heart fs-1 ps-1 btn text-danger"></i>
      <!-- <router-link :to="{name:'Plant',params:{artId:art.id}}"> -->
      <img class=" img-fluid img selectable" :src="art.imgs[0]" alt="">
      <!-- </router-link> -->
      <div class="card-body bg">
        <h4 class="card-title">
          {{ art.name }}
        </h4>
        <div>
          ${{ art.price }}

          <i class="mdi mdi-cart-plus fs-3 btn btn-dark p-1 "></i>
        </div>
      </div>
    </div>
    <div class="page-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    art: { type: Object, required: true }
  },
  setup(props) {
    return {
      props
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

</style>

<template>
  <div class="card pt-2  m-2 ">
    <img class="card-img-top img" :src="item.imgs" alt="">
    <div class="card-body d-flex ">
      <h4 class="card-title">
        {{ item?.name }}
        size - {{ item.details.size }}
      </h4>
      <p class="card-text">
        price- ${{ item.price }}
        qty - {{ item.qty }}
        subtotal - {{ item.subTotal }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style scoped>

.img{
  height:150px;
  width:150px;
}
</style>

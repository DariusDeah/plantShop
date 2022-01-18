<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="item.imgs" alt="" class="img-fluid rounded-start">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ item?.name }} - {{ item.details.size }}
          </h5>
          <p class="card-text">
          </p>
          <div>
            price- ${{ item.price }}
          </div>
          <br />
          <div>
            qty - {{ item.qty }}
          </div>
          <br />

          <div>
            subtotal - {{ item.subTotal }}
          </div>
          <br />
          <p class="card-text">
            <small class="text-muted">
              remove
            </small>
          </p>
        </div>
      </div>
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

<template>
  <div class="col-6">
    <div class="card  mb-2">
      <img class="card-img-top img-fluid" :src="plant.img" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ plant.name }}
        </h4>
        <p class="card-text">
          {{ plant.price }}
        </p>
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

<style>

</style>

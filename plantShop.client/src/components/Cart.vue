<template>
  <div class="card">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
      <h4 class="card-title">
      </h4>
      <p class="card-text">
        Text
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

<style>

</style>

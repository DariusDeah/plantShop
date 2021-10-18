<template>
  <div class="row line-btm p-2">
    <div class="col-2 ">
      <img :src="reviews.creator.picture" alt="" style="width:4rem" class="rounded-circle">
    </div>
    <div class="col-8 p-0 ">
      <p class="fw-bold m-0">
        {{ reviews.creator.name }}
      </p>
      <div>
        <p class="text-muted m-0 ">
          {{ reviews.createdAt.slice(0,10) }}
        </p>
        <p class="fw-bold">
          {{ reviews.rating }}
        </p>
        <div class="row">
          <p>{{ reviews.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: { type: Object, required: true }
  },
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style scoped>

</style>

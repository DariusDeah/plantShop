<template>
  <div class="container mt-3 ">
    <div class="row  ">
      <h1 class="fw-bolder text-center fs-1 mb-1 Bree-Regular" id="company-name">
        Madison's Garden
      </h1>
      <i class="fab fa-pagelines text-black text-center fs-2 pb-1"></i>
      <h4 class="text-center fs-4 mt-2 ">
        plants for any aesthetic
      </h4>
    </div>
    <div class="hero-text__border text-center mt-3"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex ">
        <img src="src\assets\img\Plant_Flatline.png" alt="" class="watering-plant__sizing  ">
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-10 ps-5">
        <button class="button btn fw-bold ">
          Sign In
        </button>
      </div>
    </div>
    <div class="row  text-center mt-4 pt-2">
      <h4>Not a member? sign-up</h4>
    </div>
  </div>
</template>

<script>
import CircleType from 'circletype'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    onMounted(async() => {
      await new CircleType(document.getElementById('company-name')).radius(384)
    })

    return {

    }
  }
}
</script>

<style>
.hero-text__border{
  border-bottom: rgba(37, 37, 37, 0.37) solid .7px;
}

.watering-plant__sizing{
display: flex;
justify-content: center;
align-content: center;
  width: 25rem;
  height: 25rem;
}
.button{
 width: inherit;
 background-color: #01b763;
 box-shadow: #01b763 0rem .5rem 1.2rem 1px;

 border-radius: 1.2rem;
 padding: .7rem;
 color: #f8f8f8;
}

</style>

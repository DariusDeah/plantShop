<template>
  <main v-if="!user.isAuthenticated">
    <login-page />
  </main>
  <main v-else class="Bree-Regular">
    <div class="container-fluid">
      <section class="hero">
        <div class="row pt-3 ps-5 text-overlay pt-5">
          <div class="  col-md-4 text-bg ps-5 ">
            <h5 class="fw-bolder fs-1">
              Good Morning,<br> <span class="text-plant-green fs-1"> {{ user.name }} </span>
            </h5>
            <div class="row mt-5">
              <h3>{{ qoute.text }}</h3>
              <p>-{{ qoute.author }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-12">
          <featured-plant />
        </div>
      </div>
    </div>
    <div class="container ">
      <div class="row fs-4">
        <ul class="d-flex p-3 list fw-bold text-muted border border-bottom-dark">
          <li class="selectable text-black" @click="favPage()">
            Favorites
          </li>
          <li class="selectable" @click="newPage()">
            New
          </li>
          <li class="selectable" @click="indoorPage()">
            Indoor
          </li>
          <li class="selectable" @click="outdoorPage()">
            Outdoor
          </li>
        </ul>
      </div>
    </div>
  </main>
  <div class="container">
    <router-view />
    <div class="row ">
      <Plants v-for="p in plants" :key="p.id" :plant="p" />
    </div>
  </div>
  <section class="container banner px-1 mt-4 mb-4 ">
    <div class="row  banner-row ">
      <div class="col d-flex  p-3 fw-bolder justify-content-center ">
        <span class="art ">ART</span> <span>|</span> <span class="decor ">DECOR</span>
      </div>
    </div>
  </section>
  <div class="container">
    <router-view />
    <div class="row ">
      <Plants v-for="p in plants" :key="p.id" :plant="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import LoginPage from './LoginPage.vue'
import FeaturedPlant from '../components/FeaturedPlant.vue'
import { router } from '../router'
import { plantsService } from '../services/PlantsService'
import { qouteService } from '../services/QouteService'
export default {
  components: { LoginPage, FeaturedPlant },
  name: 'Home',
  setup() {
    onMounted(async() => {
      await plantsService.getPlants()
      await qouteService.getQoutes()
    })
    return {
      user: computed(() => AppState.user),
      async favPage() {
        router.push({ name: 'Home.Favorites' })
      },
      async newPage() {
        router.push({ name: 'Home.New' })
      },
      async indoorPage() {
        router.push({ name: 'Home.Indoor' })
      },
      async outdoorPage() {
        router.push({ name: 'Home.Outdoor' })
      },
      plants: computed(() => AppState.plants),
      qoute: computed(() => AppState.qoute)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.hero{
    background-image: url(src/assets/img/muneeb-syed-x9NfeD3FpsE-unsplash.jpg);
    background-size: cover;
    height: 80vh;
    background-position: center;
  }
@media only screen and (max-width: 600px) {
  .hero{
    height: 30vh;
  }
.text-overlay{
  padding: 0 !important;
  visibility: hidden;
}
.banner-row{
  width: auto;
}
}
.list{
  list-style: none;
justify-content: space-between;
:active{
color: black !important;
}
}
.text-bg{
  background-color: rgba(255, 255, 255, 0.945);
height: 30rem;

}
.banner{
  font-size: 8rem ;
  letter-spacing: 2rem;
}
.banner-row{
  border: solid black 2px;
}

</style>

<template>
  <main v-if="!user.isAuthenticated">
    <login-page />
  </main>
  <main v-else>
    <div class="container">
      <div class="row pt-3">
        <h6>Good Morning, <span class="text-plant-green fs-2"> {{ user.name }} </span> </h6>
      </div>
    </div>
    <div class="container">
      <div class="row pt-3">
        <h4>search bar</h4>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-12">
          <featured-plant />
        </div>
      </div>
    </div>
    <div class="container ">
      <div class="row">
        <ul class="d-flex p-3 list fw-bold text-muted">
          <li class="selectable" @click="favPage()">
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
  <div class="container-fluid">
    <!-- <router-view /> -->
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
export default {
  components: { LoginPage, FeaturedPlant },
  name: 'Home',
  setup() {
    onMounted(async() => {
      await plantsService.getPlants()
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
      plants: computed(() => AppState.plants)
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
.list{
  list-style: none;
justify-content: space-between;
:active{
color: black !important;
}
}

</style>

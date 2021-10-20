import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  plants: [],
  activePlant: {},
  reviews: [],
  currentImg: null,
  cart: null,
  qoute: null
})

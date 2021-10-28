import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CartService {
  async addCart(itemId) {
    const res = await api.post('api/cart', itemId)
    logger.log('the cart!!!', res.data)
    // AppState.cart = res.data
    // logger.log(AppState.cart)
  }
}
export const cartService = new CartService()

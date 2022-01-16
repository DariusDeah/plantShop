import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CartService {
  async getCart(accountId) {
    const res = await api.get(`account/${accountId}/cart`)
    AppState.cart = res.data
  }

  async addCart(itemId, accountId) {
    // logger.log(itemId)
    // logger.log(accountId)
    const res = await api.post(`account/${accountId}/cart`, { itemId: itemId, accountId: accountId })
    logger.log('the cart!!!', res.data)
    // AppState.cart = res.data
    // logger.log(AppState.cart)
  }
}
export const cartService = new CartService()

import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CartService {
  async getCart(accountId) {
    const cart = dbContext.Cart.findOne({ creatorId: accountId })
    if (!cart) {
      throw new BadRequest()
    }
    return cart
  }

  async createCart(cartData) {
    const cart = await dbContext.Cart.create(cartData)
    await cart.populate('creator')
    await cart.populate('item')
    return cart
  }
}
export const cartService = new CartService()

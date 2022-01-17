import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'
class CartService {
  async getCart(accountId) {
    const cart = await dbContext.Cart.findOne({ creatorId: accountId })
    if (!cart) {
      const cart = await this.createCart(accountId)
      return cart
    }
    await cart.populate('item')

    return cart
  }

  async createCart(accountId) {
    const cart = await dbContext.Cart.create({ creatorId: accountId })
    return cart
  }

  async addItem(itemId, accountId) {
    const cart = await dbContext.Cart.updateOne(
      { creatorId: accountId },
      { $addToSet: { itemId: itemId.itemId } }
    )
    return cart
  }

  async removeItem(itemId, accountId) {
    const cart = await dbContext.Cart.updateOne(
      { creatorId: accountId },
      { $pull: { itemId: itemId } }
    )
    return cart
  }

  async editItem(itemId, accountId) {

  }
}
export const cartService = new CartService()

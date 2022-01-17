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
  // FIXME current is that the create tries to find a current existing cart except there is no curret existing cart so an error is always thrown
  // async createCart(cartData, accountId) {
  //   const currentCart = await this.getCart(accountId)
  //   if (currentCart === null || undefined) {
  //     const cart = await dbContext.Cart.create(cartData)
  //     await cart.populate('creator')
  //     await cart.populate('item')
  //     logger.log('hitttt 1')

  //     return cart
  //   }
  //   if (currentCart.creatorId.toString() === cartData.creatorId.toString()) {
  //     const cart = await dbContext.Cart.findByIdAndUpdate({
  //       creatorId: cartData.creatorId
  //     }, {
  //       $push: { itemId: cartData.itemId }
  //     })
  //     logger.log('hitttt 2')
  //     return cart
  //   }
  // }

  // i took the add to cart logic from the other function
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

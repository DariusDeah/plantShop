import { cartService } from '../services/CartService'
import BaseController from '../utils/BaseController'

export class CartController extends BaseController {
  constructor() {
    super('api/cart')
    this.router
      .post('', this.createUserCart)
  }

  createUserCart = async(req, res, next) => {
    try {
      req.body.creatorId = req.userInfo.id
      const cart = await cartService.createCart(req.body)
      res.send(cart)
    } catch (error) {
      next(error)
    }
  }
}

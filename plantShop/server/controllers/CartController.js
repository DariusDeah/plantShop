import { Auth0Provider } from '@bcwdev/auth0provider'
import { cartService } from '../services/CartService'
import BaseController from '../utils/BaseController'

export class CartController extends BaseController {
  constructor() {
    super('api/cart')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
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

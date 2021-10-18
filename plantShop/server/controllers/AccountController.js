import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { cartService } from '../services/CartService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/:accountId/cart', this.getUserCart)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserCart(req, res, next) {
    try {
      const cart = await cartService.getCart(req.params.accountId)
      res.send(cart)
    } catch (error) {
      next(error)
    }
  }
}

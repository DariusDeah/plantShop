import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { cartService } from '../services/CartService'
import { favoriteService } from '../services/FavoritesService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .post('/:accountId/favorites', this.addToFavorites)
      .post('/:accountId/cart', this.addToCart)
      .get('/:accountId/favorites', this.getFavorites)
      .get('/:accountId/cart', this.getUserCart)
      .delete('/:accountId/favorites/:itemId', this.removeFav)
      .delete('/:accountId/cart/:itemId', this.removeFromCart)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async addToCart(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      logger.log(req.body)
      const cartItem = await cartService.addItem(req.body, req.params.accountId)
      res.send(cartItem)
    } catch (error) {
      next(error)
    }
  }

  async removeFromCart(req, res, next) {
    try {
      await cartService.removeItem(req.params.itemId, req.params.accountId)
      res.send('removed')
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

  async getFavorites(req, res, next) {
    try {
      const favorites = await favoriteService.getFavs(req.params.accountId)
      res.send(favorites)
    } catch (error) {
      next(error)
    }
  }

  async addToFavorites(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const favorite = await favoriteService.addToFavs(req.body, req.params.accountId)
      res.send(favorite)
    } catch (error) {
      next(error)
    }
  }

  async removeFav(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      // logger.log(req.body)
      const removedFav = await favoriteService.removeFav(req.body, req.params.itemId, req.params.accountId)
      res.send(removedFav)
    } catch (error) {
      next(error)
    }
  }
}

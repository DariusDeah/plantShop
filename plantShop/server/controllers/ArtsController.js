import { Auth0Provider } from '@bcwdev/auth0provider'
import { artService } from '../services/ArtsService'
import BaseController from '../utils/BaseController'

export class ArtsController extends BaseController {
  constructor() {
    super('api/arts')
    this.router
      .get('', this.getArts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addArt)
  }

  getArts = async(req, res, next) => {
    try {
      const arts = await artService.getAllArts({ ...req.query })
      res.send(arts)
    } catch (error) {
      next(error)
    }
  }

  addArt = async(req, res, next) => {
    try {
      req.body.creatorId = req.userInfo.id
      const addedArt = await artService.createArt(req.body)
      res.send(addedArt)
    } catch (error) {
      next(error)
    }
  }
}

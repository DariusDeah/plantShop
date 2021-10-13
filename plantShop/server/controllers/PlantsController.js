import { Auth0Provider } from '@bcwdev/auth0provider'
import { plantsService } from '../services/PlantsService'
import BaseController from '../utils/BaseController'

export class PlantsController extends BaseController {
  constructor() {
    super('api/plants')
    this.router
      .get('', this.getAllPlants)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlant)
  }

 getAllPlants = async(req, res) => {
   try {
     const plants = await plantsService.getplants()
     res.status(200).send(plants)
   } catch (error) {
     res.send(error)
   }
 }

  createPlant = async(req, res) => {
    try {
      req.body.creatorId = req.userInfo.id
      const createdPlant = await plantsService.createPlant(req.body)
      res.send(createdPlant)
    } catch (error) {

    }
  }
}

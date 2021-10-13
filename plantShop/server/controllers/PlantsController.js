import { plantsService } from '../services/PlantsService'
import BaseController from '../utils/BaseController'

export class PlantsController extends BaseController {
  constructor() {
    super('api/plants')
    this.router
      .get('', this.getAllPlants)
  }

 getAllPlants = async(req, res) => {
   try {
     const plants = await plantsService.getplants()
     res.status(200).send(plants)
   } catch (error) {
     res.send(error)
   }
 }
}

import { Auth0Provider } from '@bcwdev/auth0provider'
// import { redisClient, DEFUALT_EXPIRATION } from '../RedisHandler'
import { plantsService } from '../services/PlantsService'
import { reviewsService } from '../services/ReviewsService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class PlantsController extends BaseController {
  constructor() {
    super('api/plants')
    this.router
      .get('', this.getAllPlants)
      .get('/:plantId', this.getPlantById)
      .get('/:plantId/reviews', this.getPlantReviews)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlant)
      .put('/:plantId', this.editPlant)
      .delete('/:plantId', this.removePlant)
  }

  getAllPlants = async(req, res, next) => {
    try {
      const plants = await plantsService.getplants({ ...req.query })
      res.status(200).send(plants)
    } catch (error) {
      next(error)
    }
  }

  getPlantById = async(req, res) => {
    try {
      const plant = await plantsService.getPlantById(req.params.plantId)
      res.send(plant)
    } catch (error) {
      res.send(error)
    }
  }

  createPlant = async(req, res, next) => {
    try {
      // Auth
      req.body.creatorId = req.userInfo.id

      const createdPlant = await plantsService.createPlant(req.body)
      res.send(createdPlant)
    } catch (error) {
      next(error)
    }
  }

  editPlant = async(req, res) => {
    try {
      req.body.creatorId = req.userInfo.id
      const editedPlant = await plantsService.editPlant(req.params.plantId, req.body)
      res.send(editedPlant)
    } catch (error) {
      res.send(error)
    }
  }

  removePlant = async(req, res) => {
    try {
      req.body.creatorId = req.userInfo.id
      const removedPlant = await plantsService.removePlant(req.params.plantId, req.body)
      res.send(removedPlant)
    } catch (error) {
      res.send(error)
    }
  }

  // ----
  getPlantReviews = async(req, res, next) => {
    try {
      const plantReviews = await reviewsService.getPlantReviews(req.params.plantId)
      res.send(plantReviews)
    } catch (error) {
      next(error)
    }
  }
}

import { dbContext } from '../db/DbContext'
// import { DEFUALT_EXPIRATION, redisClient } from '../RedisHandler'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class PlantsService {
  getplants = async(query) => {
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach(ef => delete query[ef])

    if (query.sort) {
      query = query.sort()
    }

    const plants = await dbContext.Plants.find(query)

    return plants
  }

  getPlantById = async(plantId) => {
    const plant = await dbContext.Plants.findById(plantId)
    await plant.populate('creator', 'name picture')
    if (!plant) {
      throw new BadRequest()
    }
    plant.subTotal = plant.price * plant.qty

    return plant
  }

  createPlant = async(plantBody) => {
    plantBody.subTotal = plantBody.price * plantBody.qty
    const createdPlant = await dbContext.Plants.create(plantBody)
    await createdPlant.populate('creator')
    return createdPlant
  }

  editPlant = async(plantId, plantBody) => {
    const editedPlant = await this.getPlantById(plantId)
    // makes sure the creator of the plant we grabbed matches the id of the requester
    if (editedPlant.creatorId.toString() !== plantBody.creatorId.toString()) {
      throw new Forbidden()
    }
    if (!editedPlant) {
      throw new BadRequest()
    }

    // setting the data of the plant we grabbed to equal the data of the request if theres a change or stay the same if no change is given this allows our put request to act like a patch request as well
    // #region PLANT DATA
    editedPlant.name = plantBody.name || editedPlant.name
    editedPlant.price = plantBody.price || editedPlant.price
    editedPlant.description = plantBody.description || editedPlant.description
    editedPlant.category = plantBody.category || editedPlant.category
    editedPlant.img = plantBody.img || editedPlant.img
    editedPlant.details = plantBody.details || editedPlant.details
    editedPlant.qty = plantBody.qty || editedPlant.qty
    editedPlant.stock = plantBody.stock || editedPlant.stock

    // #endregion
    editedPlant.subTotal = plantBody.price * plantBody.qty || plantBody.editedPlant.price * editedPlant.qty
    await editedPlant.save()
    return editedPlant
  }

  removePlant = async(plantId, plantBody) => {
    const removedPlant = await this.getPlantById(plantId)
    if (removedPlant.creatorId.toString() !== plantBody.creatorId.toString()) {
      throw new Forbidden()
    }
    if (removedPlant.deleted === true) {
      throw new BadRequest()
    }

    removedPlant.deleted = !removedPlant.deleted
    await removedPlant.save()
    return removedPlant
  }
}
export const plantsService = new PlantsService()

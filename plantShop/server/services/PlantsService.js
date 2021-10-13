import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlantsService {
  getplants = async(query = {}) => {
    const plants = await dbContext.Plants.find(query)
    return plants
  }

  getPlantById = async(plantId) => {
    const plant = await dbContext.Plants.findById(plantId)
    await plant.populate('creator', 'name picture')
    if (!plant) {
      throw new BadRequest()
    }
    return plant
  }

  createPlant = async(plantBody) => {
    const createdPlant = await dbContext.Plants.create(plantBody)
    await createdPlant.populate('creator')
    return createdPlant
  }

  editPlant
}
export const plantsService = new PlantsService()

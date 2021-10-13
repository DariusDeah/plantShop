import { dbContext } from '../db/DbContext'

class PlantsService {
  getplants = async(query = {}) => {
    const plants = await dbContext.Plants.find(query)
    return plants
  }

  createPlant = async(plantBody) => {
    const createdPlant = await dbContext.Plants.create(plantBody)
    await createdPlant.populate('creator')
  }
}
export const plantsService = new PlantsService()

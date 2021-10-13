import { dbContext } from '../db/DbContext'

class PlantsService {
  getplants = async(query = {}) => {
    const plants = await dbContext.Plants.find(query)
    return plants
  }
}
export const plantsService = new PlantsService()

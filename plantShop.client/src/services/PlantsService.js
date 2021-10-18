import { AppState } from '../AppState'
import { PlantModel } from '../models/Plant'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PlantsService {
  async getPlants() {
    const res = await api.get('api/plants')
    logger.log(res.data)
    AppState.plants = res.data.map(p => new PlantModel(p))
  }

  async getPlantById(plantId) {
    AppState.activePlant = {}
    const res = await api.get(`api/plants/${plantId}`)
    logger.log(res.data)
    AppState.activePlant = res.data
  }
}
export const plantsService = new PlantsService()
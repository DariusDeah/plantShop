import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ArtsService {
  async getArts(query) {
    const res = api.get(`api/arts?${query}`)
    logger.log(res.data)
  }
}
export const artService = new ArtsService()

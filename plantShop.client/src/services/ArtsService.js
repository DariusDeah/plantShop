import { AppState } from '../AppState'
import { ArtModel } from '../models/Art'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ArtsService {
  async getArts(query) {
    const res = await api.get(`api/arts?${query}`)
    logger.log(res.data, 'Arts')
    AppState.arts = res.data.map(a => new ArtModel(a))
  }
}
export const artsService = new ArtsService()

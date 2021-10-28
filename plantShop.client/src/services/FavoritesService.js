import { logger } from '../utils/Logger'
import { api } from './AxiosService'

import { AppState } from '../AppState'

class FavoritesService {
  async getFavorites(accountId) {
    const res = await api.get(`account/${accountId}/favorites`)
    logger.log('favs', res.data)
    AppState.favorites = res.data
  }
}
export const favoritesService = new FavoritesService()

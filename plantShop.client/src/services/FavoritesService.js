import { logger } from '../utils/Logger'
import { api } from './AxiosService'

import { AppState } from '../AppState'

class FavoritesService {
  async getFavorites(accountId) {
    const res = await api.get(`account/${accountId}/favorites`)
    logger.log('favs', res.data)
    AppState.favorites = res.data
  }

  async addFavs(itemId, accountId) {
    const res = await api.post(`account/${accountId}/favorites`, { itemIds: itemId })
    AppState.favorites = res.data
    logger.log('favs in app', AppState.favorites)
    await this.getFavorites(accountId)
  }

  async removeFavs(itemId, accountId) {
    const res = await api.delete(`account/${accountId}/favorites/${itemId}`)
    logger.log('remove')
    AppState.favorites.itemIds = AppState.favorites.itemIds.filter(f => f.id !== itemId)
    await this.getFavorites(accountId)
    logger.warn('THE STUFF', AppState.favorites.itemIds[1])
  }
}
export const favoritesService = new FavoritesService()

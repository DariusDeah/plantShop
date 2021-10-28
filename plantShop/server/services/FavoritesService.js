import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class FavoritesService {
  async getFavs(accountId) {
    const favorites = await dbContext.Favorites.findOne({ creatorId: accountId })
    // await favorites.populate('creator')
    // await favorites.populate('item')

    return favorites
  }

  async addToFavs(favData, creatorId) {
    const origanlFaves = await this.getFavs(creatorId)
    if (origanlFaves === null || undefined) {
      const favorite = await dbContext.Favorites.create(favData)
      await favorite.populate('creator')
      await favorite.populate('item')
      return favorite
    }
    if (origanlFaves.creatorId.toString() === favData.creatorId.toString()) {
      const favorite = await dbContext.Favorites.findOneAndUpdate({
        creatorId: favData.creatorId
      }, {
        $addToSet: { itemIds: favData.itemIds }
      })
      logger.log(favorite)
      return favorite
    }
  }
}
export const favoriteService = new FavoritesService()

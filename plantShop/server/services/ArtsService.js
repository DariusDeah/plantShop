import { dbContext } from '../db/DbContext'

class ArtsService {
  async getAllArts(query) {
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach(ef => delete query[ef])
    const arts = await dbContext.Art.find(query)
    return arts
  }

  createArt = async(artBody) => {
    const createdArt = await dbContext.Art.create(artBody)
    await createdArt.populate('creator')
    return createdArt
  }
}
export const artService = new ArtsService()

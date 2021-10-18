
import { AppState } from '../AppState'
import { ReviewModel } from '../models/Review'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ReviewsService {
  async getReviewsByPlant(plantId) {
    const res = await api.get(`api/plants/${plantId}/reviews`)
    logger.log(res)
    AppState.reviews = res.data.map(r => new ReviewModel(r))
  }
}
export const reviewsService = new ReviewsService()

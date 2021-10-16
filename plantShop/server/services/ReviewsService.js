import { dbContext } from '../db/DbContext'

class ReviewsService {
  getReviews = async() => {
    const reviews = dbContext.Reviews.find()
    return reviews
  }

  createReview = async(reviewData) => {
    const createdReview = await dbContext.Reviews.create(reviewData)
    await createdReview.populate('creator')
    return createdReview
  }
}
export const reviewsService = new ReviewsService()

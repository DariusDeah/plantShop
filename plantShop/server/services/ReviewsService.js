import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ReviewsService {
  getReviews = async() => {
    const reviews = await dbContext.Reviews.find().populate('creator')
    return reviews
  }

  getPlantReviews = async(plantId) => {
    const plantReviews = await dbContext.Reviews.find(plantId).populate('creator')
    if (!plantReviews) {
      throw new BadRequest()
    }
    return plantReviews
  }

  createReview = async(reviewData) => {
    const createdReview = await dbContext.Reviews.create(reviewData)
    await createdReview.populate('creator')
    return createdReview
  }

  editReview = async(reviewId, reviewData) => {
    const editedReview = await dbContext.Reviews.findById(reviewId)
    if (editedReview.creatorId.toString() !== reviewData.creatorId.toString()) {
      throw new Forbidden()
    }
    if (!editedReview) {
      throw new BadRequest()
    }
    editedReview.rating = reviewData.rating || editedReview.rating
    editedReview.title = reviewData.title || editedReview.title
    editedReview.body = reviewData.body || editedReview.body

    editedReview.save()
    return editedReview
  }
}
export const reviewsService = new ReviewsService()

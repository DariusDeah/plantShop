import { Auth0Provider } from '@bcwdev/auth0provider'
import { plantsService } from '../services/PlantsService'
import { reviewsService } from '../services/ReviewsService'
import BaseController from '../utils/BaseController'

export class ReviewsController extends BaseController {
  constructor() {
    super('api/reviews')
    this.router
      .get('', this.getReviews)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createReview)
      .put('/:reviewId', this.editReview)
  }

   getReviews = async(req, res, next) => {
     try {
       const reviews = await reviewsService.getReviews()
       res.send(reviews)
     } catch (error) {
       next(error)
     }
   }

  createReview = async(req, res, next) => {
    try {
      req.body.creatorId = req.userInfo.id
      const createdReview = await reviewsService.createReview(req.body)
      res.send(createdReview)
    } catch (error) {
      next(error)
    }
  }

  editReview = async(req, res, next) => {
    try {
      req.body.creatorId = req.userInfo.id
      const editedReview = await reviewsService.editReview(req.params.reviewId, req.body)
      res.send(editedReview)
    } catch (error) {
      next(error)
    }
  }
}

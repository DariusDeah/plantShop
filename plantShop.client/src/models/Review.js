export class ReviewModel {
  constructor(review) {
    this.rating = review.rating
    this.title = review.title
    this.body = review.body
    this.plantId = review.plantId
    this.creator = review.creator
    this.createdAt = review.createdAt
  }
}

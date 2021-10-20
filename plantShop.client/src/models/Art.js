export class artModel {
  constructor(artData) {
    this.category = artData.category
    this.createdAt = artData.createdAt
    this.creatorId = artData.creatorId
    this.deleted = artData.deleted
    this.description = artData.description
    this.id = artData.id
    this.imgs = artData.imgs
    this.name = artData.name
    this.price = artData.price
    this.qty = artData.qty
    this.stock = artData.stock
    this.updatedAt = artData.updatedAt
  }
}

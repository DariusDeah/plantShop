import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const FavoritesSchema = new Schema({
  itemIds: [Schema.Types.ObjectId],
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } })
FavoritesSchema.virtual('item', {
  localField: 'itemIds',
  foreignField: '_id',
  justOne: true,
  ref: 'Plant' || 'Art'
})
FavoritesSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

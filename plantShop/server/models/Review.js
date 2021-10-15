import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReviewSchema = new Schema({
  rating: { type: String, enum: ['0', '1', '2', '3', '4', '5'], required: true },
  title: { type: String },
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
})
ReviewSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

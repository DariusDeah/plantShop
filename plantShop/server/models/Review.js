import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReviewSchema = new Schema({
  rating: { type: Number, enum: [0, 1, 2, 3, 4, 5], required: true },
  title: { type: String },
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  plantId: { type: Schema.Types.ObjectId, required: true, ref: 'Plant' },
  deleted: { type: Boolean, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })

ReviewSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
// FIXME
ReviewSchema.index({ plantId: 1, creator1: 1 }, { unique: true })

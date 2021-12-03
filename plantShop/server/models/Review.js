import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ReviewSchema = new Schema({
  rating: { type: Number, min: 0, max: 5, required: true['Enter a valid number'] },
  title: { type: String },
  body: { type: String, required: true['Review must have content'] },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  itemId: { type: Schema.Types.ObjectId, required: true },
  deleted: { type: Boolean, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })

ReviewSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
// FIXME
ReviewSchema.index({ itemId: 1, creatorId: 1 }, { unique: true })
ReviewSchema.pre(/^find/, function(next) {
  this.select('-deleted')
  next()
})

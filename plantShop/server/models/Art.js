import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const ArtSchema = new Schema({
  name: { type: String, required: true },
  imgs: [{ type: String, required: true }],
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: [{ type: String, enum: ['New', 'Popular', 'Sale', 'Low stock'], required: true }],
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

ArtSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

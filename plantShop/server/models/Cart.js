import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CartSchema = new Schema(
  {
    itemId: [{ type: Schema.Types.ObjectId, ref: 'Plant' || 'Art' }],
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    subTotal: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
CartSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CartSchema.virtual('item', {
  localField: 'itemId',
  foreignField: '_id',
  justOne: true,
  ref: 'Plant' || 'Art'
})
CartSchema.index({ creatorId: 1, subTotal: -1 })

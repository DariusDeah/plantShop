import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CartSchema = new Schema(
  {
    itemIds: [{ type: Schema.Types.ObjectId, required: true }],
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    subTotal: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

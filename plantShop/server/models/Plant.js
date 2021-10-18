import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlantSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: [{ type: String, enum: ['New', 'Popular', 'Indoor', 'Outdoor', 'Sale', 'Low stock'], required: true }],
  imgs: [{ type: String, required: true, trim: true }],
  details: {
    size: { type: String, required: true, enum: ['Large', 'Med', 'Small'] },
    height: { type: String, required: true },
    days: { type: String, required: true },
    water: { type: String, required: true }
  },
  qty: { type: Number, required: true, min: 1 },
  stock: { type: Number, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account' },
  deleted: { type: Boolean, default: false }

}, { timestamps: true, toJSON: { virtuals: true } })

PlantSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

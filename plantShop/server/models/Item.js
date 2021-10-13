import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { enum: ['NEW', 'Popular', 'Indoor', 'Outdoor'] },
  img: { type: String, required: true },
  details: { type: String, required: true },
  qty: { type: Number, required: true, min: 1 }
}, { timestamps: true, toJSON: { virtuals: true } })

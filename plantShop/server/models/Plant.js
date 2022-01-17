import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlantSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: [{ type: String, enum: ['New', 'Popular', 'Indoor', 'Outdoor', 'Sale', 'Low stock'], required: true }],
  // label: [{ type: String, enum: ['Plants', 'Accessories', 'Kits', 'Starters'], required: true }],
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
  deleted: { type: Boolean, default: false },
  subTotal: { type: Number, min: 0, default: this.price }

}, { timestamps: true, toJSON: { virtuals: true } })

PlantSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

PlantSchema.pre(/^find/, function(next) {
  this.find({ deleted: false })
  this.select('-deleted')
  next()
})
PlantSchema.post('save', function(next) {
  if (this.qty <= 0) return next()
  this.subTotal = this.qty * this.price
  next()
})

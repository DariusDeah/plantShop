import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CartSchema } from '../models/Cart'
import { PlantSchema } from '../models/Plant'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

  Plants = mongoose.model('Items', PlantSchema)

  Cart = mongoose.model('Cart', CartSchema)
}

export const dbContext = new DbContext()

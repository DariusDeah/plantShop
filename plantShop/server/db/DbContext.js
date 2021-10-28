import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CartSchema } from '../models/Cart'
import { PlantSchema } from '../models/Plant'
import { ReviewSchema } from '../models/Review'
import { ValueSchema } from '../models/Value'
import { ArtSchema } from '../models/Art'
import { FavoritesSchema } from '../models/Favorites'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Plants = mongoose.model('Plant', PlantSchema);
  Art = mongoose.model('Art', ArtSchema)
  Cart = mongoose.model('Cart', CartSchema);
  Reviews = mongoose.model('Review', ReviewSchema)
  Favorites = mongoose.model('Favorite', FavoritesSchema)
}

export const dbContext = new DbContext()

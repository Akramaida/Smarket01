import { User } from '../user'

import { Category } from '../category'

import { Image } from '../image'

import { Order } from '../order'

export class Listing {
  id: string

  title: string

  description: string

  price: number

  userId: string

  user?: User

  categoryId: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  images?: Image[]

  orders?: Order[]
}

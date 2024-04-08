import { User } from '../user'

import { Listing } from '../listing'

import { Payment } from '../payment'

export class Order {
  id: string

  quantity: number

  totalPrice: number

  status: string

  userId: string

  user?: User

  listingId: string

  listing?: Listing

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  payments?: Payment[]
}

import { Order } from '../order'

export class Payment {
  id: string

  amount: number

  paymentDate: string

  paymentMethod: string

  orderId: string

  order?: Order

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

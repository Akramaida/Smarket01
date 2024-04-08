import { Listing } from '../listing'

export class Category {
  id: string

  name: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  listings?: Listing[]
}

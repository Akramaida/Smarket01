import { Listing } from '../listing'

export class Image {
  id: string

  url: string

  listingId: string

  listing?: Listing

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}

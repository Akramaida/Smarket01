import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ImageDomainModule } from '../domain'
import { ImageController } from './image.controller'

import { ListingDomainModule } from '../../../modules/listing/domain'

import { ImageByListingController } from './imageByListing.controller'

@Module({
  imports: [AuthenticationDomainModule, ImageDomainModule, ListingDomainModule],
  controllers: [ImageController, ImageByListingController],
  providers: [],
})
export class ImageApplicationModule {}

import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderDomainModule } from '../domain'
import { OrderController } from './order.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { OrderByUserController } from './orderByUser.controller'

import { ListingDomainModule } from '../../../modules/listing/domain'

import { OrderByListingController } from './orderByListing.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderDomainModule,

    UserDomainModule,

    ListingDomainModule,
  ],
  controllers: [
    OrderController,

    OrderByUserController,

    OrderByListingController,
  ],
  providers: [],
})
export class OrderApplicationModule {}

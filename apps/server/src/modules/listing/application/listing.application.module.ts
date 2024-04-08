import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ListingDomainModule } from '../domain'
import { ListingController } from './listing.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ListingByUserController } from './listingByUser.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { ListingByCategoryController } from './listingByCategory.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ListingDomainModule,

    UserDomainModule,

    CategoryDomainModule,
  ],
  controllers: [
    ListingController,

    ListingByUserController,

    ListingByCategoryController,
  ],
  providers: [],
})
export class ListingApplicationModule {}

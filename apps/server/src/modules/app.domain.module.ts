import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { CategoryDomainModule } from './category/domain'

import { ListingDomainModule } from './listing/domain'

import { ImageDomainModule } from './image/domain'

import { OrderDomainModule } from './order/domain'

import { PaymentDomainModule } from './payment/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    CategoryDomainModule,

    ListingDomainModule,

    ImageDomainModule,

    OrderDomainModule,

    PaymentDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}

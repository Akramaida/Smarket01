import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationListingSubscriber } from './subscribers/notification.listing.subscriber'

import { NotificationImageSubscriber } from './subscribers/notification.image.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationPaymentSubscriber } from './subscribers/notification.payment.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationCategorySubscriber,

    NotificationListingSubscriber,

    NotificationImageSubscriber,

    NotificationOrderSubscriber,

    NotificationPaymentSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}

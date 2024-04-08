import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { CategoryApplicationModule } from './category/application'

import { ListingApplicationModule } from './listing/application'

import { ImageApplicationModule } from './image/application'

import { OrderApplicationModule } from './order/application'

import { PaymentApplicationModule } from './payment/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    CategoryApplicationModule,

    ListingApplicationModule,

    ImageApplicationModule,

    OrderApplicationModule,

    PaymentApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}

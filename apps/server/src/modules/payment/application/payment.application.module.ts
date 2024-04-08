import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PaymentDomainModule } from '../domain'
import { PaymentController } from './payment.controller'

import { OrderDomainModule } from '../../../modules/order/domain'

import { PaymentByOrderController } from './paymentByOrder.controller'

@Module({
  imports: [AuthenticationDomainModule, PaymentDomainModule, OrderDomainModule],
  controllers: [PaymentController, PaymentByOrderController],
  providers: [],
})
export class PaymentApplicationModule {}

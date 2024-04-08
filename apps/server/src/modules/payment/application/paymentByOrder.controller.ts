import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PaymentDomainFacade } from '@server/modules/payment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PaymentApplicationEvent } from './payment.application.event'
import { PaymentCreateDto } from './payment.dto'

import { OrderDomainFacade } from '../../order/domain'

@Controller('/v1/orders')
export class PaymentByOrderController {
  constructor(
    private orderDomainFacade: OrderDomainFacade,

    private paymentDomainFacade: PaymentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/order/:orderId/payments')
  async findManyOrderId(
    @Param('orderId') orderId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.orderDomainFacade.findOneByIdOrFail(orderId)

    const items = await this.paymentDomainFacade.findManyByOrder(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/order/:orderId/payments')
  async createByOrderId(
    @Param('orderId') orderId: string,
    @Body() body: PaymentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, orderId }

    const item = await this.paymentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PaymentApplicationEvent.PaymentCreated.Payload>(
      PaymentApplicationEvent.PaymentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

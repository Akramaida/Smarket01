import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderDomainFacade } from '@server/modules/order/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderApplicationEvent } from './order.application.event'
import { OrderCreateDto } from './order.dto'

import { ListingDomainFacade } from '../../listing/domain'

@Controller('/v1/listings')
export class OrderByListingController {
  constructor(
    private listingDomainFacade: ListingDomainFacade,

    private orderDomainFacade: OrderDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/listing/:listingId/orders')
  async findManyListingId(
    @Param('listingId') listingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.listingDomainFacade.findOneByIdOrFail(listingId)

    const items = await this.orderDomainFacade.findManyByListing(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/listing/:listingId/orders')
  async createByListingId(
    @Param('listingId') listingId: string,
    @Body() body: OrderCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, listingId }

    const item = await this.orderDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderApplicationEvent.OrderCreated.Payload>(
      OrderApplicationEvent.OrderCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

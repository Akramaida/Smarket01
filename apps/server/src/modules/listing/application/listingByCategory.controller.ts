import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ListingDomainFacade } from '@server/modules/listing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ListingApplicationEvent } from './listing.application.event'
import { ListingCreateDto } from './listing.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class ListingByCategoryController {
  constructor(
    private categoryDomainFacade: CategoryDomainFacade,

    private listingDomainFacade: ListingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/category/:categoryId/listings')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.categoryDomainFacade.findOneByIdOrFail(categoryId)

    const items = await this.listingDomainFacade.findManyByCategory(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/category/:categoryId/listings')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: ListingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.listingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ListingApplicationEvent.ListingCreated.Payload>(
      ListingApplicationEvent.ListingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

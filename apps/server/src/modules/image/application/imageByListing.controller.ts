import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ImageDomainFacade } from '@server/modules/image/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ImageApplicationEvent } from './image.application.event'
import { ImageCreateDto } from './image.dto'

import { ListingDomainFacade } from '../../listing/domain'

@Controller('/v1/listings')
export class ImageByListingController {
  constructor(
    private listingDomainFacade: ListingDomainFacade,

    private imageDomainFacade: ImageDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/listing/:listingId/images')
  async findManyListingId(
    @Param('listingId') listingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.listingDomainFacade.findOneByIdOrFail(listingId)

    const items = await this.imageDomainFacade.findManyByListing(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/listing/:listingId/images')
  async createByListingId(
    @Param('listingId') listingId: string,
    @Body() body: ImageCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, listingId }

    const item = await this.imageDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ImageApplicationEvent.ImageCreated.Payload>(
      ImageApplicationEvent.ImageCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}

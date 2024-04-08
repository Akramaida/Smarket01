import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { CategoryApi } from './category/category.api'

import { ListingApi } from './listing/listing.api'

import { ImageApi } from './image/image.api'

import { OrderApi } from './order/order.api'

import { PaymentApi } from './payment/payment.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Category extends CategoryApi {}

  export class Listing extends ListingApi {}

  export class Image extends ImageApi {}

  export class Order extends OrderApi {}

  export class Payment extends PaymentApi {}
}

import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Category as CategoryModel } from './category/category.model'

import { Listing as ListingModel } from './listing/listing.model'

import { Image as ImageModel } from './image/image.model'

import { Order as OrderModel } from './order/order.model'

import { Payment as PaymentModel } from './payment/payment.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Category extends CategoryModel {}

  export class Listing extends ListingModel {}

  export class Image extends ImageModel {}

  export class Order extends OrderModel {}

  export class Payment extends PaymentModel {}
}

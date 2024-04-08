import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2daada71-d420-4de7-9193-adf564832499', '1Armani28@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5b4b91b9-d01a-4d84-8859-358fd272db51', '7Meagan.Grady@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=9', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('09fff889-f8ad-4485-8679-7c3ae623b8cf', '19Erna90@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('58d3b0f2-9897-4232-bbb5-59db18a4bfae', '25Brad66@hotmail.com', 'Michael Wilson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('84fa5195-4d77-4289-8536-63df225ba7c9', '31Lolita.Daugherty3@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('979434ec-5c44-4a63-b585-854180db3d8e', '37Christopher85@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=39', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('07fa94e2-22d9-4529-8bde-fbf1db9fa1ab', '43Evangeline_Kris@yahoo.com', 'Michael Wilson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f14588ca-efeb-4470-8a48-7fa29f55dd81', '49Abdul99@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=51', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('79a14aa2-5fd6-4c5b-9296-fa7951e22589', '55Kay35@yahoo.com', 'Michael Wilson', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d48d5c0b-772e-4484-a53a-7d2dc8816d0f', 'New Message', 'A listing youre watching has dropped in price', 'Price Alert Bot', '64Fernando24@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '07fa94e2-22d9-4529-8bde-fbf1db9fa1ab');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2412a2c3-2652-4d84-ba89-50c5d8f06b8e', 'Listing Approved', 'You have a new message from a buyer.', 'Marketplace Team', '71Kaylee.Kling61@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', 'f14588ca-efeb-4470-8a48-7fa29f55dd81');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('73e5162d-244e-4f31-8799-32bb5ea18804', 'New Message', 'We have received your payment. Your item will be dispatched soon.', 'User1234', '78Aurelio64@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '979434ec-5c44-4a63-b585-854180db3d8e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('01332481-4eab-458e-bbbd-2c8b6faed5ad', 'Order Confirmation', 'You have a new message from a buyer.', 'Price Alert Bot', '85Derick.Hintz@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '979434ec-5c44-4a63-b585-854180db3d8e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('36e11a17-5b27-4811-be53-8eb8a2b3d674', 'Listing Approved', 'We have received your payment. Your item will be dispatched soon.', 'Price Alert Bot', '92Norma_McLaughlin@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '07fa94e2-22d9-4529-8bde-fbf1db9fa1ab');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c3d395bf-d5ac-4236-95e8-951b929fe643', 'Order Confirmation', 'Your listing has been approved and is now live.', 'Listing Review', '99Genevieve22@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6699838b-23e4-4403-8df5-48e65b234635', 'Payment Received', 'Your order has been confirmed. Thank you for shopping with us', 'Listing Review', '106Desmond10@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '09fff889-f8ad-4485-8679-7c3ae623b8cf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9a7b65f3-abd7-4f7a-b05c-b5e56f433475', 'Price Drop Alert', 'Your order has been confirmed. Thank you for shopping with us', 'Payments Department', '113Niko.Farrell@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '84fa5195-4d77-4289-8536-63df225ba7c9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('267e96d5-8271-425e-8897-68976b5d1ec9', 'Price Drop Alert', 'Your listing has been approved and is now live.', 'Listing Review', '120Lolita87@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '84fa5195-4d77-4289-8536-63df225ba7c9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f061acda-4902-43ff-9125-746d1ef838c8', 'Order Confirmation', 'Your order has been confirmed. Thank you for shopping with us', 'Listing Review', '127Reagan.Dooley19@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '09fff889-f8ad-4485-8679-7c3ae623b8cf');

INSERT INTO "category" ("id", "name") VALUES ('380e94c9-1194-462f-9015-596decc10d1a', 'Electronics');
INSERT INTO "category" ("id", "name") VALUES ('5908401d-8508-41b1-bbd8-4c694bc8c0ee', 'Books');
INSERT INTO "category" ("id", "name") VALUES ('94e1b5a8-661b-43f3-b8f8-0251ea84b441', 'Books');
INSERT INTO "category" ("id", "name") VALUES ('c8121a6b-0280-4129-9b0b-4712d45f6f36', 'Fashion');
INSERT INTO "category" ("id", "name") VALUES ('570ce0a7-ff82-4a96-a2fc-763abcd5397d', 'Toys  Hobbies');
INSERT INTO "category" ("id", "name") VALUES ('9819f32a-f976-41bb-b447-3583f753cc19', 'Home  Garden');
INSERT INTO "category" ("id", "name") VALUES ('496323e5-e992-420d-b4bf-b856bb8b29a3', 'Fashion');
INSERT INTO "category" ("id", "name") VALUES ('e6db255e-4824-4e55-8dc8-c9a58735ce88', 'Fashion');
INSERT INTO "category" ("id", "name") VALUES ('50109a68-891e-4949-9654-1394c4a85a21', 'Toys  Hobbies');
INSERT INTO "category" ("id", "name") VALUES ('c5ae34b3-1e76-4d87-a6dc-f7a5a36ad67f', 'Fashion');

INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('af10b4a5-9d74-42fd-b243-aee150fc5f87', 'Leather Wallet', 'Abstract art canvas by a contemporary artist adds a splash of color to any space.', 320, 'f14588ca-efeb-4470-8a48-7fa29f55dd81', '50109a68-891e-4949-9654-1394c4a85a21');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('e85549e2-5fba-4be4-b081-cb6a89e73d21', 'Modern Art Canvas', 'Brand new never worn designer sunglasses with UV protection.', 275, '09fff889-f8ad-4485-8679-7c3ae623b8cf', 'c8121a6b-0280-4129-9b0b-4712d45f6f36');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('76ee0c5e-28e9-4478-a614-d5e09eb2f6c2', 'Designer Sunglasses', 'Brand new never worn designer sunglasses with UV protection.', 507, '09fff889-f8ad-4485-8679-7c3ae623b8cf', '380e94c9-1194-462f-9015-596decc10d1a');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('08fada0c-3f45-4576-b79d-f06e5893524d', 'Modern Art Canvas', 'Brand new never worn designer sunglasses with UV protection.', 458, 'f14588ca-efeb-4470-8a48-7fa29f55dd81', 'e6db255e-4824-4e55-8dc8-c9a58735ce88');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('27f09304-b851-4832-819e-60c1c6d2c47c', 'Leather Wallet', 'Abstract art canvas by a contemporary artist adds a splash of color to any space.', 418, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c8121a6b-0280-4129-9b0b-4712d45f6f36');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('a4dd87ee-63e0-4ce5-baa7-05afd49560bf', 'Designer Sunglasses', 'Genuine leather wallet compact and stylish with multiple compartments.', 867, '09fff889-f8ad-4485-8679-7c3ae623b8cf', '570ce0a7-ff82-4a96-a2fc-763abcd5397d');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('4b7d0805-b6b0-4558-9c54-316de12188ce', 'Leather Wallet', 'Genuine leather wallet compact and stylish with multiple compartments.', 332, '79a14aa2-5fd6-4c5b-9296-fa7951e22589', '570ce0a7-ff82-4a96-a2fc-763abcd5397d');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('4314dff7-e204-4008-ac61-e3a4891df683', 'Vintage Wooden Chair', 'Genuine leather wallet compact and stylish with multiple compartments.', 279, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5908401d-8508-41b1-bbd8-4c694bc8c0ee');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('bb8e279d-72de-4e2b-8601-a3d387673943', 'Vintage Wooden Chair', 'Elegantly designed wooden chair from the 1950s perfect for any living room.', 463, '5b4b91b9-d01a-4d84-8859-358fd272db51', '380e94c9-1194-462f-9015-596decc10d1a');
INSERT INTO "listing" ("id", "title", "description", "price", "userId", "categoryId") VALUES ('26581f85-4b05-4dbb-8563-b28d2d20bb47', 'Modern Art Canvas', 'Genuine leather wallet compact and stylish with multiple compartments.', 99, '58d3b0f2-9897-4232-bbb5-59db18a4bfae', '570ce0a7-ff82-4a96-a2fc-763abcd5397d');

INSERT INTO "image" ("id", "url", "listingId") VALUES ('628c9396-2ee6-441a-886a-0a23cab55ace', 'https://i.imgur.com/YfJQV5z.png?id=191', 'bb8e279d-72de-4e2b-8601-a3d387673943');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('ffb8f63b-9dc2-493b-af80-ef2a87faddb0', 'https://i.imgur.com/YfJQV5z.png?id=193', 'bb8e279d-72de-4e2b-8601-a3d387673943');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('3e2127de-1743-4a9d-8d28-6badf6187a3a', 'https://i.imgur.com/YfJQV5z.png?id=195', 'e85549e2-5fba-4be4-b081-cb6a89e73d21');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('79949679-d754-4604-a388-1b394b30d365', 'https://i.imgur.com/YfJQV5z.png?id=197', 'a4dd87ee-63e0-4ce5-baa7-05afd49560bf');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('72ba79d6-99a0-4414-9e50-49d56ed9afe0', 'https://i.imgur.com/YfJQV5z.png?id=199', '26581f85-4b05-4dbb-8563-b28d2d20bb47');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('71d85c9f-cba6-4b35-93b1-d0ded1a596b1', 'https://i.imgur.com/YfJQV5z.png?id=201', '4314dff7-e204-4008-ac61-e3a4891df683');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('bf559f4a-c159-465e-b1ab-1ff381536d2f', 'https://i.imgur.com/YfJQV5z.png?id=203', '27f09304-b851-4832-819e-60c1c6d2c47c');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('08d7b185-c9b1-437e-9bcb-5c343727b06e', 'https://i.imgur.com/YfJQV5z.png?id=205', '4b7d0805-b6b0-4558-9c54-316de12188ce');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('4cf166c5-071b-4a03-8375-7b11fa1afb82', 'https://i.imgur.com/YfJQV5z.png?id=207', 'bb8e279d-72de-4e2b-8601-a3d387673943');
INSERT INTO "image" ("id", "url", "listingId") VALUES ('10ccca10-6b9b-43de-b9dd-0e7db7a59d92', 'https://i.imgur.com/YfJQV5z.png?id=209', '26581f85-4b05-4dbb-8563-b28d2d20bb47');

INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('f0ae7228-23c9-41d3-888c-9cd69bc487ac', 859, 347, 'shipped', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e85549e2-5fba-4be4-b081-cb6a89e73d21');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('449b67c7-af51-4f39-85e7-a7d29004a864', 296, 366, 'pending', '09fff889-f8ad-4485-8679-7c3ae623b8cf', '26581f85-4b05-4dbb-8563-b28d2d20bb47');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('2dd4d6b9-37fa-4387-818b-70e65e2f24b7', 721, 579, 'processing', '58d3b0f2-9897-4232-bbb5-59db18a4bfae', '26581f85-4b05-4dbb-8563-b28d2d20bb47');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('6c28381b-2921-47fb-8de8-a6e6d30d974a', 426, 774, 'pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4314dff7-e204-4008-ac61-e3a4891df683');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('44533576-9809-466c-8c96-e61616e09258', 691, 628, 'cancelled', '979434ec-5c44-4a63-b585-854180db3d8e', 'bb8e279d-72de-4e2b-8601-a3d387673943');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('68654cf7-6ec7-487c-b838-b6e6f45ceb96', 240, 272, 'shipped', '58d3b0f2-9897-4232-bbb5-59db18a4bfae', '08fada0c-3f45-4576-b79d-f06e5893524d');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('0a2e42db-8fd4-4617-9002-282fdca3f99a', 918, 66, 'delivered', '79a14aa2-5fd6-4c5b-9296-fa7951e22589', 'bb8e279d-72de-4e2b-8601-a3d387673943');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('6e9a55d4-0b12-4788-af31-6ecdb9f22108', 887, 330, 'shipped', '2daada71-d420-4de7-9193-adf564832499', 'e85549e2-5fba-4be4-b081-cb6a89e73d21');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('b1519a53-c987-413b-b5c4-713e19746544', 344, 381, 'shipped', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '27f09304-b851-4832-819e-60c1c6d2c47c');
INSERT INTO "order" ("id", "quantity", "totalPrice", "status", "userId", "listingId") VALUES ('9139a736-54d2-4b97-8c80-cdf4e3f995c9', 552, 940, 'cancelled', '07fa94e2-22d9-4529-8bde-fbf1db9fa1ab', 'af10b4a5-9d74-42fd-b243-aee150fc5f87');

INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('769e807a-7ffe-425e-9750-669d0050fdcf', 716, '2024-01-16T07:04:33.986Z', 'Credit Card', 'f0ae7228-23c9-41d3-888c-9cd69bc487ac');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('12eb533e-edfb-4585-a8b2-cd5407f0866f', 446, '2024-08-04T20:50:43.058Z', 'PayPal', '6e9a55d4-0b12-4788-af31-6ecdb9f22108');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('6d1e3438-accc-47ff-8031-3a3ac19bf679', 369, '2024-08-02T21:38:29.012Z', 'Apple Pay', 'f0ae7228-23c9-41d3-888c-9cd69bc487ac');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('e5ab7214-a189-4671-b005-ae7f1b60f65f', 580, '2024-01-01T15:28:34.967Z', 'Bank Transfer', '68654cf7-6ec7-487c-b838-b6e6f45ceb96');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('39b8bdde-4db1-4f0f-b263-112e3b7f9ac9', 221, '2023-04-28T23:56:33.120Z', 'PayPal', 'b1519a53-c987-413b-b5c4-713e19746544');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('d6b2686f-656b-446a-8901-f311af2fafbb', 721, '2024-07-08T18:48:36.442Z', 'Credit Card', '6e9a55d4-0b12-4788-af31-6ecdb9f22108');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('fa10746f-420a-4750-98fd-d7c256ec19b1', 781, '2023-10-15T12:52:12.966Z', 'PayPal', '6e9a55d4-0b12-4788-af31-6ecdb9f22108');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('7e27b887-063c-4af5-8dde-a8b52daf211e', 432, '2025-01-01T20:52:22.395Z', 'Debit Card', 'f0ae7228-23c9-41d3-888c-9cd69bc487ac');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('f1d10bb0-ce39-4482-aac0-b4cfadafd4c2', 447, '2023-05-06T02:49:30.270Z', 'Bank Transfer', '2dd4d6b9-37fa-4387-818b-70e65e2f24b7');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('9243d08e-b415-4fc2-87e3-3df664f113c5', 233, '2024-10-06T14:21:11.215Z', 'Credit Card', 'b1519a53-c987-413b-b5c4-713e19746544');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

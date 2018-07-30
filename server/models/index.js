import ProductModel from './ProductModel';
import CategoryModel from './CategoryModel';
import SizeModel from './SizeModel';
import AvailableProductModel from './AvailableProductModel';

import PaymentModel from './PaymentModel';
import DeliveryModel from './DeliveryModel';
import OrderModel from './OrderModel';

module.exports = {
  Product: ProductModel,
  Category: CategoryModel,
  Size: SizeModel,
  AvailableProduct: AvailableProductModel,
  Payment: PaymentModel,
  Delivery: DeliveryModel,
  Order: OrderModel
}
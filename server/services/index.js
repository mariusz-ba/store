import ProductService from './ProductService';
import CategoryService from './CategoryService';
import SizeService from './SizeService';
import AvailableProductService from './AvailableProductService';
import PaymentService from './PaymentService';
import DeliveryService from './DeliveryService';

import { 
  Product,
  Category,
  Size,
  AvailableProduct,
  Payment,
  Delivery
} from '../models';

const productService = new ProductService(Product);
const categoryService = new CategoryService(Category);
const sizeService = new SizeService(Size);
const availableProductService = new AvailableProductService(AvailableProduct);
const paymentService = new PaymentService(Payment);
const deliveryService = new DeliveryService(Delivery);

module.exports = {
  productService,
  categoryService,
  sizeService,
  availableProductService,
  paymentService,
  deliveryService
}
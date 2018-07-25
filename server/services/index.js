import ProductService from './ProductService';
import CategoryService from './CategoryService';
import SizeService from './SizeService';
import AvailableProductService from './AvailableProductService';

import { 
  Product,
  Category,
  Size,
  AvailableProduct
} from '../models';

const productService = new ProductService(Product);
const categoryService = new CategoryService(Category);
const sizeService = new SizeService(Size);
const availableProductService = new AvailableProductService(AvailableProduct);

module.exports = {
  productService,
  categoryService,
  sizeService,
  availableProductService
}
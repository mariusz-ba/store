import ProductService from './ProductService';
import { Product } from '../models';

const productService = new ProductService(Product);

module.exports = {
  productService
}
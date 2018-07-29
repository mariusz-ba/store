import express from 'express';
import Product from '../models/ProductModel';
import { productService, availableProductService } from '../services';
import { pickBy, identity } from 'lodash';
import { catchExceptions } from '../middleware/exceptions';

const router = express.Router();

router.get(
  '/', 
  catchExceptions(async (req, res) => {
    const filter = pickBy(req.query, identity);
    const products = await productService.getProducts(filter);
    res.status(200).json(products);
  })
)

router.get(
  '/:id', 
  catchExceptions(async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  })
)

router.post(
  '/', 
  catchExceptions(async (req, res) => {
    const product = new Product({ ...req.body });
    const savedProduct = await productService.saveProduct(product);
    res.status(200).json(savedProduct);
  })
)

router.put(
  '/:id',
  catchExceptions(async (req, res) => {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  })
)

router.delete(
  '/:id', 
  catchExceptions(async (req, res) => {
    // Delete product
    const deleted = await productService.deleteProduct(req.params.id);
    // Delete availabilities of this product
    await availableProductService.deleteAvailableProducts(req.params.id);
    res.status(200).json(deleted);
  })
)

export default router;
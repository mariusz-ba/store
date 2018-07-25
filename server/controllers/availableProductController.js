import express from 'express';
import AvailableProduct from '../models/AvailableProductModel';
import { availableProductService, productService } from '../services';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await availableProductService.getAvailableProducts();
  res.status(200).json(products);
})

router.get('/:id', async (req, res) => {
  const product = await availableProductService.getAvailableProductById(req.params.id);
  res.status(200).json(product);
})

router.post('/', async (req, res) => {
  const product = new AvailableProduct({ ...req.body });
  const savedProduct = await availableProductService.saveAvailableProduct(product);
  await productService.addAvailability(savedProduct.product, savedProduct._id);
  res.status(200).json(savedProduct);
})

router.delete('/:id', async (req, res) => {
  const deleted = await availableProductService.deleteAvailableProduct(req.params.id);
  await productService.deleteAvailability(req.params.id);
  res.status(200).json(deleted);
})

export default router;
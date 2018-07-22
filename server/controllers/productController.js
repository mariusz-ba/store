import express from 'express';
import Product from '../models/ProductModel';
import { productService } from '../services';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await productService.getProducts();
  res.status(200).json(products);
})

router.get('/:id', async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json(product);
})

router.post('/', async (req, res) => {
  const { name, price } = req.body;
  const product = new Product({ name, price });
  const savedProduct = await productService.saveProduct(product);
  res.status(200).json(savedProduct);
})

export default router;
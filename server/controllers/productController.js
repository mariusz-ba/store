import express from 'express';
import Product from '../models/ProductModel';
import { productService, availableProductService } from '../services';
import { pickBy, identity } from 'lodash';

const router = express.Router();

router.get('/', async (req, res) => {
  const filter = pickBy(req.query, identity);

  console.log(filter);

  const products = await productService.getProducts(filter);
  // Filter returned products if size is specified
  if(filter.size) {
    const filtered = products.filter(product => {
      return product.availability.find(availability => availability.size == filter.size);
    })
    res.status(200).json(filtered);
  } else {
    res.status(200).json(products);
  }
})

router.get('/:id', async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json(product);
})

router.post('/', async (req, res) => {
  const product = new Product({ ...req.body });
  const savedProduct = await productService.saveProduct(product);
  res.status(200).json(savedProduct);
})

router.put('/:id', async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.status(200).json(product);
})

router.delete('/:id', async (req, res) => {
  // Delete product
  const deleted = await productService.deleteProduct(req.params.id);
  // Delete availabilities of this product
  await availableProductService.deleteAvailableProducts(req.params.id);
  res.status(200).json(deleted);
})

export default router;
import express from 'express';
import Category from '../models/CategoryModel';
import { categoryService } from '../services';

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
})

router.get('/:id', async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);
  res.status(200).json(category);
})

router.post('/', async (req, res) => {
  const category = new Category({ ...req.body });
  const savedCategory = await categoryService.saveCategory(category);
  res.status(200).json(savedCategory);
})

export default router;
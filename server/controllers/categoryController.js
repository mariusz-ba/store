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

router.put('/:id', async (req, res) => {
  const category = await categoryService.updateCategory(req.params.id, { ...req.body });
  res.status(200).json(category);
})

router.delete('/:id', async (req, res) => {
  const deleted = await categoryService.deleteCategory(req.params.id);
  // Get all products with this category and set category to null
  res.status(200).json(deleted);
})

export default router;
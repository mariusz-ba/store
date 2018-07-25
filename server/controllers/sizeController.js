import express from 'express';
import Size from '../models/SizeModel';
import { sizeService } from '../services';

const router = express.Router();

router.get('/', async (req, res) => {
  const sizes = await sizeService.getSizes();
  res.status(200).json(sizes);
})

router.get('/:id', async (req, res) => {
  const size = await sizeService.getSizeById(req.params.id);
  res.status(200).json(size);
})

router.post('/', async (req, res) => {
  const size = new Size({ ...req.body });
  const savedSize = await sizeService.saveSize(size);
  res.status(200).json(savedSize);
})

router.put('/:id', async (req, res) => {
  const size = await sizeService.updateSize(req.params.id, { ...req.body });
  res.status(200).json(size);
})

export default router;
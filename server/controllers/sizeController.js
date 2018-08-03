import express from 'express';
import Size from '../models/SizeModel';
import { sizeService } from '../services';
import { catchExceptions } from '../middleware/exceptions';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.get(
  '/',
  catchExceptions(async (req, res) => {
    const sizes = await sizeService.getSizes();
    res.status(200).json(sizes);
  })
)

router.get(
  '/:id',
  catchExceptions(async (req, res) => {
    const size = await sizeService.getSizeById(req.params.id);
    res.status(200).json(size);
  })
)

router.post(
  '/',
  authenticate,
  catchExceptions(async (req, res) => {
    const size = new Size({ ...req.body });
    const savedSize = await sizeService.saveSize(size);
    res.status(200).json(savedSize);
  })
)

router.put(
  '/:id',
  authenticate,
  catchExceptions(async (req, res) => {
    const size = await sizeService.updateSize(req.params.id, { ...req.body });
    res.status(200).json(size);
  })
)

router.delete(
  '/:id', 
  authenticate,
  catchExceptions(async (req, res) => {
    const deleted = await sizeService.deleteSize(req.params.id);
    res.status(200).json(deleted);
  })
)

export default router;
import express from 'express';
import Delivery from '../models/DeliveryModel';
import { deliveryService } from '../services';
import { catchExceptions } from '../middleware/exceptions';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.get(
  '/',
  catchExceptions(async (req, res) => {
    const deliveries = await deliveryService.getDeliveries();
    res.status(200).json(deliveries);
  })
)

router.get(
  '/:id',
  catchExceptions(async (req, res) => {
    const delivery = await deliveryService.getDeliveryById(req.params.id);
    res.status(200).json(delivery);
  })
)

router.post(
  '/',
  authenticate,
  catchExceptions(async (req, res) => {
    const delivery = new Delivery({ ...req.body });
    const savedDelivery = await deliveryService.saveDelivery(delivery);
    res.status(200).json(savedDelivery);
  })
)

router.put(
  '/:id',
  authenticate,
  catchExceptions(async (req, res) => {
    const delivery = await deliveryService.updateDelivery(req.params.id, { ...req.body });
    res.status(200).json(delivery);
  })
)

router.delete(
  '/:id',
  authenticate,
  catchExceptions(async (req, res) => {
    const deleted = await deliveryService.deleteDelivery(req.params.id);
    res.status(200).json(deleted);
  })
)

export default router;
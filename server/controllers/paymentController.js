import express from 'express';
import Payment from '../models/PaymentModel';
import { paymentService } from '../services';
import { catchExceptions } from '../middleware/exceptions';

const router = express.Router();

router.get(
  '/',
  catchExceptions(async (req, res) => {
    const payments = await paymentService.getPayments();
    res.status(200).json(payments);
  })
)

router.get(
  '/:id',
  catchExceptions(async (req, res) => {
    const payment = await paymentService.getPaymentById(req.params.id);
    res.status(200).json(payment);
  })
)

router.post(
  '/',
  catchExceptions(async (req, res) => {
    const payment = new Payment({ ...req.body });
    const savedPayment = await paymentService.savePayment(payment);
    res.status(200).json(savedPayment);
  })
)

router.put(
  '/:id',
  catchExceptions(async (req, res) => {
    const payment = await paymentService.updatePayment(req.params.id, { ...req.body });
    res.status(200).json(payment);
  })
)

router.delete(
  '/:id',
  catchExceptions(async (req, res) => {
    const deleted = await paymentService.deletePayment(req.params.id);
    res.status(200).json(deleted);
  })
)

export default router;
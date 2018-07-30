class PaymentService {
  constructor(Payment) {
    this.Payment = Payment;
  }

  getPayments = async () => {
    return this.Payment.find({});
  }

  getPaymentById = async (paymentId) => {
    return this.Payment.findById(paymentId);
  }

  savePayment = async (payment) => {
    await payment.save();
    return payment;
  }

  updatePayment = async (paymentId, payment) => {
    return this.Payment.findOneAndUpdate({ _id: paymentId }, { $set: { ...payment }}, { new: true });
  }

  deletePayment = async (paymentId) => {
    return this.Payment.deleteOne({ _id: paymentId });
  }
}

export default PaymentService;
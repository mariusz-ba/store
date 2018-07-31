// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Payment schema
const Payment = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true, default: '/img/payment/placeholder.png' },
  url: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
})

export default mongoose.model('Payment', Payment);``
// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Delivery schema
const Delivery = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  icon: { type: String, required: true, default: '/img/delivery/placeholder.png' },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
})

export default mongoose.model('Delivery', Delivery);
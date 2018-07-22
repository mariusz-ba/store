// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Product schema
const Product = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
  price: { type: Number, required: true },
  amount: { type: Number, required: true, default: 0 },
  picture: { type: String, required: true, default: '/img/product-placeholder.png' }
})

export default mongoose.model('Product', Product);
// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Product schema
const Product = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, default: 'Description not specified' },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
  price: { type: Number, required: true },
  amount: { type: Number, required: true, default: 0 },
  pictures: { type: Array, required: true, default: ['/img/product-placeholder.jpg']},
  features: { type: Array, default: [] }
})

export default mongoose.model('Product', Product);
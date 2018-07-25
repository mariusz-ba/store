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
  pictures: { type: Array, required: true, default: ['/img/product-placeholder.jpg']},
  features: { type: Array, default: [] },
  category: { type: Schema.Types.ObjectId, required: true, ref: 'Category'},
  availability: [{ type: Schema.Types.ObjectId, required: true, ref: 'AvailableProduct'}]
})

export default mongoose.model('Product', Product);
// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Product schema
const Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
})

export default mongoose.model('Product', Product);
// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Category schema
const Category = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' }
})

export default mongoose.model('Category', Category);
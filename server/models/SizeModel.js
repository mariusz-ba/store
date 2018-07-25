// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Size schema
const Size = new Schema({
  name: { type: String, required: true },
  short: { type: String, required: true }
})

export default mongoose.model('Size', Size);
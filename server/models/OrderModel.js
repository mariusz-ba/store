// Module dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Order schema
const Order = new Schema({
  payment: { type: Schema.Types.ObjectId, required: true, ref: 'Payment' },
  delivery: { type: Schema.Types.ObjectId, required: true, ref: 'Delivery' },
  products: [{
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product'},
    size: { type: Schema.Types.ObjectId, required: true, ref: 'Size' },
    amount: { type: Number, required: true, default: 1 }
  }],
  price: { type: Number, required: true, default: 0 },
  client: { type: Object, required: true },
  address: { type: Object, required: true },
  createdAt: { type: Number, default: Date.now }
})

export default mongoose.model('Order', Order);
// Module dependencies
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { saltRounds } from '../config';
const Schema = mongoose.Schema;

// Use schema
const User = new Schema({
  username: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
})

// Hash password before inserting into database
User.pre('save', async function(next) {
  try {
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
    next();
  } catch (e) {
    next(e);
  }
});

export default mongoose.model('User', User);
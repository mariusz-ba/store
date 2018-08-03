import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config';
import { catchExceptions } from '../middleware/exceptions';
import { omit } from 'lodash';

// Models
import User from '../models/UserModel';

// Router
const router = express.Router();
router.post(
  '/', 
  catchExceptions(async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
          ...omit(user._doc, 'password')
        }, jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid credentials' }});
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid credentials' }});
    }
  })
)

export default router;
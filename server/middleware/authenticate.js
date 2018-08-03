import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config';

import User from '../models/UserModel';

export default async (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if(authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if(token) {
    try {
      const decoded = await jwt.verify(token, jwtSecret);
      const user = await User.findOne({ _id: decoded._id });
      if(user) {
        req.user = user;
        next();
      } else {
        throw 'No such user';
      }
    } catch (e) {
      res.status(401).json({ error: 'Failed to authenticate' });
    }
  } else {
    res.status(403).json({ error: 'No token provided' });
  }
}
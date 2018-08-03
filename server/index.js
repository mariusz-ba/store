// Module dependencies
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

import { 
  authController,
  productController,
  categoryController,
  sizeController,
  availableProductController,
  paymentController,
  deliveryController,
  orderController
} from './controllers';

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/store', { useNewUrlParser: true });

// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Middleware
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// import User from './models/UserModel';
// const usr = new User({ username: 'admin', password: 'admin' });
// usr.save((err, user) => {
//   console.log('saved user: ', user);
// })

// Routes
app.use('/api/auth', authController);
app.use('/api/products', productController);
app.use('/api/categories', categoryController);
app.use('/api/sizes', sizeController);
app.use('/api/available', availableProductController);
app.use('/api/payments', paymentController);
app.use('/api/deliveries', deliveryController);
app.use('/api/orders', orderController);


// Main
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const result = { error: err.messsage }

  if(app.get('env') === 'production')
    result.error = 'Unable to handle the request';

  res.status(500).json(result);
})

// Export app
app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);
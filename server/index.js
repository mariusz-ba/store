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
  productController,
  categoryController,
  sizeController,
  availableProductController
} from './controllers';

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/store');

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


// Routes
app.use('/api/products', productController);
app.use('/api/categories', categoryController);
app.use('/api/sizes', sizeController);
app.use('/api/available', availableProductController);


// Main
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Export app
app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);
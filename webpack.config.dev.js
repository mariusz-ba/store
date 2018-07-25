import path from 'path';

export default {
  entry: ['babel-polyfill', path.join(__dirname, '/client/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/server/public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve('client/components'),
      containers: path.resolve('client/containers'),
      actions: path.resolve('client/actions'),
      reducers: path.resolve('client/reducers'),
      blocks: path.resolve('client/blocks'),
      utils: path.resolve('client/utils')
    },
    extensions: ['.js']
  },
}
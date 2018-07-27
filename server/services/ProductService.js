import { pick } from 'lodash';

class ProductService {
  constructor(Product) {
    this.Product = Product;
  }

  getProducts = async (filter = {}) => {
    const conditions = pick(filter, ['category']);

    const price = {
      $gte: filter.priceFrom ? Number(filter.priceFrom) : 0,
      $lte: filter.priceTo ? Number(filter.priceTo) : 1000000000
    }

    const options = {
      skip: filter.skip ? Number(filter.skip) : 0,
      limit: filter.limit ? Number(filter.limit) : null
    }

    console.log('conditions: ', { ...conditions, price });

    return this.Product.find({ ...conditions, price }, null, options).populate('availability', 'size amount');
  }

  getProductById = async (productId) => {
    return this.Product.findById(productId).populate('availability', 'size amount');
  }

  saveProduct = async (product) => {
    await product.save();
    return product;
  }

  updateProduct = async (productId, product) => {
    return this.Product.findOneAndUpdate({ _id: productId }, { $set: { ...product }}, { new: true });
  }

  deleteProduct = async (productId) => {
    return this.Product.deleteOne({ _id: productId });
  }

  addAvailability = async (productId, availabilityId) => {
    return this.Product.findOneAndUpdate({ _id: productId }, { $push: { availability: availabilityId }});
  }

  deleteAvailability = async (productId, availabilityId) => {
    return this.Product.findOneAndUpdate({ _id: productId }, { $pull: { availability: availabilityId }});
  }
}

export default ProductService;
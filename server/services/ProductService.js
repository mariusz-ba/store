class ProductService {
  constructor(Product) {
    this.Product = Product;
  }

  getProducts = async () => {
    return this.Product.find({}).populate('availability', 'size amount');
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
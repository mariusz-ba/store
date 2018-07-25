class ProductService {
  constructor(Product) {
    this.Product = Product;
  }

  getProducts = async () => {
    return this.Product.find({}).populate('availability', 'size amount -_id');
  }

  getProductById = async (productId) => {
    return this.Product.findById(productId).populate('availability', 'size amount -_id');
  }

  saveProduct = async (product) => {
    await product.save();
    return product;
  }

  addAvailability = async (productId, availabilityId) => {
    return this.Product.findOneAndUpdate({ _id: productId }, { $push: { availability: availabilityId }});
  }

  deleteAvailability = async (productId, availabilityId) => {
    return this.Product.findOneAndUpdate({ _id: productId }, { $pull: { availability: availabilityId }});
  }
}

export default ProductService;
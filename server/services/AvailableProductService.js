class AvailableProductService {
  constructor(AvailableProduct) {
    this.AvailableProduct = AvailableProduct;
  }

  getAvailableProducts = async (filter = {}, select = {}) => {
    return this.AvailableProduct.find(filter, select);
  }

  getAvailableProductById = async (productId) => {
    return this.AvailableProduct.findById(productId);
  }

  saveAvailableProduct = async (product) => {
    await product.save();
    return product;
  }

  deleteAvailableProduct = async (productId) => {
    return this.AvailableProduct.deleteOne({ _id: productId });
  }
}

export default AvailableProductService;
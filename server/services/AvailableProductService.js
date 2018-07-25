class AvailableProductService {
  constructor(AvailableProduct) {
    this.AvailableProduct = AvailableProduct;
  }

  getAvailableProducts = async () => {
    return this.AvailableProduct.find({});
  }

  getAvailableProductById = async (productId) => {
    return this.AvailableProduct.findById(productId);
  }

  saveAvailableProduct = async (product) => {
    await product.save();
    return product;
  }
}

export default AvailableProductService;
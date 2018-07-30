class AvailableProductService {
  constructor(AvailableProduct) {
    this.AvailableProduct = AvailableProduct;
  }

  getAvailableProducts = async (filter = {}, select = {}) => {
    return this.AvailableProduct.find(filter, select);
  }

  getAvailableProductById = async (availabilityId) => {
    return this.AvailableProduct.findById(availabilityId);
  }

  saveAvailableProduct = async (product) => {
    await product.save();
    return product;
  }

  updateAvailableProduct = async (availabilityId, availability) => {
    return this.AvailableProduct.findOneAndUpdate({ _id: availabilityId }, { $set: { ...availability }}, { new: true });
  } 

  deleteAvailableProduct = async (availabilityId) => {
    return this.AvailableProduct.deleteOne({ _id: availabilityId });
  }

  deleteAvailableProducts = async (productId) => {
    return this.AvailableProduct.deleteMany({ product: productId });
  }

  checkAvailability = async (products = []) => {
    const productsIds = products.map(product => product.product);
    const availability = await this.AvailableProduct.find({ product: { $in: productsIds }})

    const result = products.map(product => {
      const available = availability.find(entry => (entry.product == product.product && entry.size == product.size));

      return {
        product: product.product,
        size: product.size,
        amount: product.amount,
        available: available ? available.amount : 0
      }
    })

    return result;
  }
}

export default AvailableProductService;
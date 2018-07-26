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
    try {
      await product.save();
    } catch (e) {
      console.log(e);
    }
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
}

export default AvailableProductService;
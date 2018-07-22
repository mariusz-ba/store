class ProductService {
  constructor(Product) {
    this.Product = Product;
  }

  getProducts = async () => {
    return this.Product.find({});
  }

  getProductById = async (productId) => {
    return this.Product.findById(productId);
  }

  saveProduct = async (product) => {
    await product.save();
    return product;
  }
}

export default ProductService;
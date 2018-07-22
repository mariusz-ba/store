class ProductService {
  constructor(Product) {
    this.Product = Product;
  }

  getProducts = async () => {
    console.log('ProductService: getting products');
    return this.Product.find({});
  }

  getProductById = async (productId) => {
    console.log(`ProductService: getting product (${productId})`);
    return this.Product.findById(productId);
  }

  saveProduct = async (product) => {
    console.log('ProductService: creating new product');
    await product.save();
    return product;
  }
}

export default ProductService;
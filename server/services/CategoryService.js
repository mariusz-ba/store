class CategoryService {
  constructor(Category) {
    this.Category = Category;
  }

  getCategories = async () => {
    return this.Category.find({});
  }

  getCategoryById = async (categoryId) => {
    return this.Category.findById(categoryId);
  }

  saveCategory = async (category) => {
    await category.save();
    return category;
  }
}

export default CategoryService;
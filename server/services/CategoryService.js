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

  updateCategory = async (categoryId, category) => {
    return this.Category.findOneAndUpdate({ _id: categoryId }, { $set: { ...category }}, { new: true });
  }

  deleteCategory = async (categoryId) => {
    return this.Category.deleteOne({ _id: categoryId });
  }
}

export default CategoryService;
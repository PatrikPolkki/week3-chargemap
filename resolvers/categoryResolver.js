import Category from '../models/categoryModel';

export default {
  Species: {
    async category(parent, args) {
      console.log('category', parent);
      return await Category.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: async (parent, args) => {
      console.log('categoryResolver, addCategory', args);
      const newCategory = new Category(args);
      return await newCategory.save();
    },
  },
};


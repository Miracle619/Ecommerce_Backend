const slugify = require("slugify");
const Category = require("../model/category");
exports.addCategory = (req, res) => {
  const categoryobj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    categoryobj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryobj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(201).json({ category });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      return res.status(200).json({ categories });
    }
  });
};

// import models
const Product = require('./Product');
const Category = require('./category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - product.belongsTo
Product.belongsTo(Category, {foreignKey: 'category_id'});

// Categories have many Products - category.hasMany
Category.hasMany(Product, {foreignKey: 'category_id', onDelete: 'CASCADE'});

// Products belongToMany Tags (through ProductTag) - product.belongsToMany
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

// Tags belongToMany Products (through ProductTag) - tag.belongsToMany
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id', onDelete: 'CASCADE'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

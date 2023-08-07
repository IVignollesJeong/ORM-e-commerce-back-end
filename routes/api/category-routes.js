const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const cateData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(cateData);
  } catch (err) {
    console.log(err),
      res.status(500).json({ message: 'Internal server error!' + err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No input id found!' }); return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err),
      res.status(500).json({ message: 'Internal server error!' + err });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
    console.log("successfully added new category: ", newCategory);
  } catch (err) {
    console.log(err),
      res.status(500).json({ message: 'Internal server error!' + err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateCategory[0] === 0) {
      res.status(404).json({ message: 'Can not find category with your input id!' }); return;
    }
    res.status(200).json({ message: 'Category updated!' });
  } catch (err) {
    console.log(err),
      res.status(500).json({ message: 'Internal server error!' + err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!deleteCategory) {
      res.status(404).json({ message: 'Can not find category with your input id!' }); return;
    }
    res.status(200).json({ message: 'Category successfully deleted!' })
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

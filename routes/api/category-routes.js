const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const category = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: 'Could not find category' });
    };
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: 'category not found' });
    }
    await Category.update(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error)
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteId = req.params.id;
    const deletedCategory = await Category.destroy({
      where: {
        id: deleteId
      }
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'category not found' });
    };
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;

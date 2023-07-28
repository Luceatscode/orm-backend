const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({ include: [Product] })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findAll({ include: [Product] })
    .then((productData) => {
      res.json(productData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Tag.findAll({ include: [Product] })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

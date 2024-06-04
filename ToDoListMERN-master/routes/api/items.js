const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// GET Request

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// POST Request

// @route POST api/items
// @desc Post an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}));
    });
    

// DELETE Request

// @route DELETE api/items
// @desc Delete an Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;


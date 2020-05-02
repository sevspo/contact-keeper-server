const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Contact = require('../models/Contact');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  private

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  private

router.post(
  '/',
  [auth, [check('name', 'name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  private

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/id
// @desc    Delete contact
// @access  private

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;

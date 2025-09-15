const express = require('express');
const router = express.Router();
const { renderForm, addUser } = require('../controllers/userController');

// Route to display the form
router.get('/', renderForm);

// Route to handle form submission
router.post('/add-user', addUser);

module.exports = router;
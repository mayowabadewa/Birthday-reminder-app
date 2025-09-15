const User = require('../models/user');
const { userValidationSchema } = require('../validation/userValidation');

// Renders the main form page
const renderForm = (req, res) => {
    res.render('index', { message: null });
};

// Handles adding a new user
const addUser = async (req, res) => {
    try {
        // 1. Validate the incoming data
        const { error } = userValidationSchema.validate(req.body);
        if (error) {
            // If validation fails, show the error message
            return res.status(400).render('index', { 
                message: { type: 'error', text: error.details[0].message } 
            });
        }

        // 2. If validation passes, create and save the user
        const { username, email, dateOfBirth } = req.body;
        const newUser = new User({ username, email, dateOfBirth });
        await newUser.save();

        res.status(201).render('index', { 
            message: { type: 'success', text: 'User added successfully!' } 
        });

    } catch (error) {
        // 3. Handle database errors (like a duplicate email)
        let errorMessage = 'An error occurred while adding the user.';
        if (error.code === 11000) { // MongoDB duplicate key error
            errorMessage = 'This email address is already registered.';
        }
        res.status(500).render('index', { 
            message: { type: 'error', text: errorMessage } 
        });
    }
};

module.exports = {
    renderForm,
    addUser,
};
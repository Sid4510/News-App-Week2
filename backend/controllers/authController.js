const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup controller
const Signup = async (req, res) => {
    try {
        const { Username, email, password } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({
            $or: [
                { Username },
                { email }
            ]
        });

        if (user) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new UserModel({
            Username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }
};

// Login controller
const Login = async (req, res) => {
    try {
        const { Username, password } = req.body;

        // Find the user by Username
        const user = await UserModel.findOne({ Username });

        if (!user) {
            return res.status(400).json({ message: 'User not found', success: false });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials', success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign({ userId: user._id, Username: user.Username }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({
            message: 'Login successful',
            success: true,
            jwtToken
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }
};

module.exports = { Signup, Login };

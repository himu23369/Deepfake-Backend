const express = require('express');
const zod = require('zod');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');
const { User } = require('../Db'); // Assuming User model is defined in Db.js

// Middleware for authentication
const { authMiddleware } = require('../middleware');

// Zod schema for signup request body validation
const signupBody = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
});

// Signup Route
router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid input. Please check your data.",
            errors: error.errors
        });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        });
    }

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hashedPassword
        });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        return res.json({
            message: "User created successfully",
            token: token,
            user: {
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname
            }
        });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Zod schema for signin request body validation
const loginBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

// Signin Route
router.post('/signin', async (req, res) => {
    const { success, error } = loginBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: error.errors
        });
    }

    try {
        const user = await User.findOne({ username: req.body.username });

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, JWT_SECRET);
            return res.json({
                message: "Sign in successful",
                token: token,
                user: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname
                }
            });
        } else {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;

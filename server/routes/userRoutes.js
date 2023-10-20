const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { hashPassword, checkPassword } = require('../helpers/authHelpers');

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password);
        const user = await User.create({ username: req.body.username, password: hashedPassword });
        res.status(201).json({ message: "User registered!", userId: user.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
        return res.status(400).json({ error: "User not found!" });
    }
    const isValid = await checkPassword(req.body.password, user.password);
    if (isValid) {
        // set up user session or generate JWT here
        res.json({ message: "Logged in!", userId: user.id });
    } else {
        res.status(400).json({ error: "Invalid password!" });
    }
});


router.get('/profile/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json({ username: user.username, role: user.role });
    } else {
        res.status(404).json({ error: "User not found!" });
    }
});


module.exports = router;

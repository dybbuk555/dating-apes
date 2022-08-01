const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/users", (req, res, next) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });
});
router.get("/users/:userId", (req, res, next) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    User.findById(userId)
        .populate({
            path: 'messages',
            populate: [{
                path: 'userSend',
                model: 'User'
            },
            {
                path: 'userRecieve',
                model: 'User'
            }]
        })
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((error) => res.json(error));
});

module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");



//  GET Retrieves all of the users
//列出所有用戶
router.get("/users", (req, res, next) => {
    User.find()
        // .populate('') 之後連結另個model
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });
});

//  GET Retrieves a specific user by id
//查看特定用戶
router.get("/users/:userId", (req, res, next) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    // Each Project document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    User.findById(userId)
        // .populate("tasks")
        .then((user) => {

            res.status(200).json(user)
        })
        .catch((error) => res.json(error));
});

module.exports = router;

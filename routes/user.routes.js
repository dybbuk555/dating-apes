const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Message = require("../models/Message.model");




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
    // console.log('what is ', userId)


    // Each Project document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    User.findById(userId)
        //為什麼不是message or Message????因為user model 裡面是messages

        .populate('messages')
        
        // .populate({
        //     path: 'messages',
        //     populate: [{
        //         path: 'userSend',
        //         model: 'User'
        //     },
        //     {
        //         path: 'userRecieve',
        //         model: 'User'

        //     }]
        // })

        .then((user) => {

            console.log('what is ', user)

            res.status(200).json(user)
        })
        .catch((error) => res.json(error));
});

module.exports = router;

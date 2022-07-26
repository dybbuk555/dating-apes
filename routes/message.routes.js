const router = require("express").Router();
// const mongoose = require('mongoose');

const Message = require('../models/Message.model');
const User = require('../models/User.model');

//  POST /api/messages  -  Creates a new message
router.post('/messages', (req, res, next) => {
    const { aText, userRecieve, userSend } = req.body;

    console.log('檢查後端！！！！', req.body)

    Message.create({ aText, userRecieve, userSend })


        .then(newMessage => {
            console.log('檢查newMessage！！！！', newMessage)

            return User.findByIdAndUpdate(userRecieve, { $push: { messages: newMessage._id } });
        })

        .then(response => res.json(response))
        .catch(err => res.json(err));
});



module.exports = router;
const router = require("express").Router();
// const mongoose = require('mongoose');

const Message = require('../models/Message.model');
const User = require('../models/User.model');

//  POST /api/messages  -  Creates a new message
router.post('/messages', (req, res, next) => {
    const { aText, userId } = req.body;

   


    console.log('check:',req.body)

    Message.create({ aText, userId })
        .then(newMessage => {
            return User.findByIdAndUpdate(userId, { $push: { messages: newMessage._id } });
        })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;
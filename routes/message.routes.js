const router = require("express").Router();
const Message = require('../models/Message.model');
const User = require('../models/User.model');
router.post('/messages', (req, res, next) => {
    const { aText, userRecieve, userSend } = req.body;
    Message.create({ aText, userRecieve, userSend })
        .then(newMessage => {
            return User.findByIdAndUpdate(userRecieve, { $push: { messages: newMessage._id } });
        })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;
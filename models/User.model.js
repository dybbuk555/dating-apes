const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: String,
  birthday: { type: Date },
  gender: String,
  postCode: Number,
  passwordHash: String,
  imageUrl: String,
});


const User = model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: String,
  birthday:  { type: Date },
  gender: String,

  
  animal:String,
  height:Number,
  width:Number,

  postCode: String,
  aboutPet: String,
  passwordHash: String,
  url: String,

  // name: { type: String, required: true },
  // birthday: { type: Date, required: true },
  // gender: { type: String, required: true },
  // postCode: { type: Number, required: true },
  // passwordHash: String,
  // imageUrl: { type: String, required: true },
});


const User = model("User", userSchema);

module.exports = User;

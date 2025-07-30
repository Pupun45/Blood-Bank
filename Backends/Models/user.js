const mongoose = require("mongoose");
const { createHmac, randomBytes } = require('node:crypto');
const { type } = require("node:os");
const {createToken} = require ('../Services/validation')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt : {type:String}
},{timestamps:true});

userSchema.pre("save",function(next){
  const user = this;

  if(!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashpass = createHmac("sha256",salt).update(user.password).digest("hex");

  this.salt = salt;
  console.log(this.salt);
  this.password = hashpass;

  next();
});

module.exports = mongoose.model("User", userSchema);

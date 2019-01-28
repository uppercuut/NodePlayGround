let UserSchema = require("./user")
let mongoose = require('./../db/mongoose.config');
const UserModel = mongoose.model('User', new mongoose.Schema(UserSchema));

var Insert = async function(newUser)
{
  return await UserModel.create(newUser);
}


module.exports={Insert:Insert}
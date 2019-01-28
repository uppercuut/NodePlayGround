let UserRepo = require("./userRepostory")


var Add = function(newuser){
  return UserRepo.Insert(newuser).then((user)=>{
      return user;
  }).catch((error)=>{
    console.log("Error While Inserting")
    return error;
  });
}


module.exports = {Add : Add};
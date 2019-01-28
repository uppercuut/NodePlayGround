
var userSchema = {
Name:{type:String,
     trim:true
    },

Email:{type:String,
trim:true,
required: [true, 'User email required']
}
};

module.exports = userSchema;


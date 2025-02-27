const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const e = require('express');
const userSchema = new mongoose.Schema({  
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
});

//? Hashing the password before saving the user to the database
userSchema.pre('save',async function(next){
const user = this;
if(!user.isModified('password')){
next();
}

try{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
} catch(err){
    next(err);
}

});

//comparee pass
userSchema.methods.matchPassword = async function(password){
  return  bcrypt.compare(password, this.password);
}


//json web token
userSchema.methods.generateToken = async function(){
try {
    return jwt.sign({ 
         userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
        },
      process.env.JWT_SECRET,
       {
         expiresIn: '30d',
        }
    );
} catch (error) {
    console.log(error);
    
}
};


module.exports = mongoose.model('User', userSchema);
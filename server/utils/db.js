const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ;

const connectDB = async () => { 
    try{
    await mongoose.connect(URI);
    console.log('database connected');
   } catch (error) {
       console.error('database connection failed', error);
       process.exit(0);
   }
};           


module.exports = connectDB;
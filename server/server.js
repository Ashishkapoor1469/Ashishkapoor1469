require('dotenv').config(); // This is to use the .env file
const express = require('express');
const cors = require('cors')
const app = express();
const authRouter = require('./router/auth-router'); // Importing the router from auth-router.js
const contactRoute = require('./router/contact-router'); // Importing the router from contact-router.js
const serviceRoute = require("./router/service-router")
const adminRoute = require('./router/admin-router')
const connectDB = require('./utils/db'); // Importing the connectDB function from db.js
const errorMiddleware = require('./middlewares/error-middleware');
const services = require('./controllers/service-controler');
const Port = 5000;

//cors policy
const corsOption ={
    origin: "http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};
app.use(cors(corsOption));

app.use(express.json()); // This is the middleware to parse the body of the request

app.use('/api/auth', authRouter); // This is the middleware to use the router
app.use('/api/form', contactRoute); // This is the middleware to use the ContactRoute
app.use('/api/data', serviceRoute);

app.use("/api/admin", adminRoute)

app.use(errorMiddleware); // This is the middleware to use the errorMiddleware

connectDB().then(()=>{
    app.listen(Port,()=>{
        console.log(`Server is running on port ${Port}`);
    }) 
}); // This is the function to connect to the database

 // Server is running on port 5000

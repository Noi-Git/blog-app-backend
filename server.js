const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const { userRegisterCtrl } = require("./controllers/users/usersCtrl");
const app = express();

dbConnect();

//Middleware --- no need to install body parser
app.use(express.json())

//step 1: create custom middleware
const logger = (req, res, next) => {
  console.log("I am a logger!")
  next(); //need to pass next() in order for middleware to continue its work
}

//step 2: usage
app.use(logger)

//user register
app.post("/api/users/register", userRegisterCtrl);

//user login
app.post("/api/users/login", (req,res)=>{
  //business logic
  res.json({user: 'User Login'})
})

//fetch all users
app.get("/api/users", (req,res)=>{
  //business logic
  res.json({user: 'Fetch all users'})
})


//server
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

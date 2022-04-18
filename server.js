const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require( "./route/users/usersRoute" );
const { errorHandler, notFound } = require( "./middlewares/error/errorHandler" );

const app = express();

dbConnect();

//Middleware --- no need to install body parser
app.use(express.json())

/*
//step 1: create custom middleware
const logger = (req, res, next) => {
  console.log("I am a logger!")
  next(); //need to pass next() in order for middleware to continue its work
}

//step 2: usage
app.use(logger)
*/

//user register ---- using Users route
app.use('/api/users', userRoutes)


// == call err handler - need to call this function after all the router
app.use(notFound)
app.use(errorHandler)

//server
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

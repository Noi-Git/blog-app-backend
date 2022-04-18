const expressAsyncHandler = require( 'express-async-handler' )
const User = require('../../model/user/User')

//==== Register ====
const userRegisterCtrl = expressAsyncHandler(async (req,res)=>{
  // console.log(req.body)
  
  // Check if user Exist
  const userExists = await User.findOne({email: req?.body?.email})
  
  if (userExists) throw new Error('User already exists')
  
  try {
      //Register user
      const user = await User.create({
        firstName: req?.body?.firstName, //? mean yes -- req=yes, body=yes,then use firstName
        // firstName: req.body && req.body.firstName, //if the is req.body - do the condition after &&
        // firstName: req.body.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        password: req?.body?.password
      })
      res.json({user})
      // res.json('user controllor')
    } catch (error) {
    res.json(error)
  }
})

module.exports = { userRegisterCtrl };
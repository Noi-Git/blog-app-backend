const User = require('../../model/user/User')

//==== Register ====
const userRegisterCtrl = async (req,res)=>{
console.log(req.body)
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
  }

module.exports = { userRegisterCtrl };
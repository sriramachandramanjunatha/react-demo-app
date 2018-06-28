import express from 'express';

// import Validator from 'validator'
// import isEmpty from 'lodash/isEmpty'
import validateInput from '../shared/validations/signup'

import bcrypt from 'bcrypt'

import User from '../models/user'
let router = express.Router()





router.post('/',(req, res) => {
// setTimeout(function () {
  const { errors, isValid } = validateInput(req.body)

  if(isValid){
    // res.json({success:true})
    const { username, password, timezone, email }= req.body


    const password_digest = bcrypt.hashSync(password,10);


    User.forge({
      username, timezone, email, password_digest
    }, {hasTimestamps:true}).save()

    .then(user => res.json({success:true}))
    .catch(err => res.status(500).json({error:err}))
  }else {
    res.status(400).json(errors);
  }
  // }, 5000);
  console.log(req.body)
})

export default router;

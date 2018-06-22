import express from 'express';

// import Validator from 'validator'
// import isEmpty from 'lodash/isEmpty'
import validateInput from '../shared/validations/signup'
let router = express.Router()





router.post('/',(req, res) => {
// setTimeout(function () {
  const { errors, isValid } = validateInput(req.body)

  if(isValid){
    res.json({success:true})
  }else {
    res.status(400).json(errors);
  }
  // }, 5000);
  console.log(req.body)
})

export default router;

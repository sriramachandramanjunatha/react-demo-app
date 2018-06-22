import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  let errors = {}

  if(Validator.isEmpty(data.username)){

    errors.username = 'This is required field'
  }

  if(Validator.isEmpty(data.email)){

    errors.email = 'This is required field'
  }

  if(Validator.isEmail(data.email)){

    errors.email = 'Email is invalid'
  }

  if(Validator.isEmpty(data.password)){

    errors.password = 'This is required field'
  }

  if(Validator.isEmpty(data.passwordConfirmation)){

    errors.passwordConfirmation = 'This is required field'
  }

  if(!Validator.equals(data.password,data.passwordConfirmation)){

      errors.passwordConfirmation = "Passwords must match"
  }
  if(Validator.isEmpty(data.timezone)){

    errors.timezone = 'This is required field'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

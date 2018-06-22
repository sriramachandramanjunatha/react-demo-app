import React from "react";
import timezones from "../../data/timezones"
import map from "lodash/map";
import validateInput from '../../../server/shared/validations/signup'

// import axios from 'axios';
import classnames from 'classnames'

import TextFieldGroup from '../common/TextFieldGroup'
class SignUpForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:'',
            errors:{},
            isLoading:false
        }


        //bind context of component rather event
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    isValid(){

      const { errors, isValid }=validateInput(this.state);

      if (!isValid) {
        this.setState({errors})
      }

      return isValid
    }
    onSubmit(e){

        e.preventDefault();

        if(this.isValid()){
          // console.log(this.state)
          // axios.post('/api/users',{user:this.state})
          this.setState({ errors:{},isLoading:true })

          this.props.userSignupRequest(this.state).then(
              () => {},
              // ( { data } ) => this.setState({errors: data})

              (data) => this.setState({ errors: data.response.data,isLoading:false })
          )
          // console.log({ errors });
          console.log(this.state);
        }

    }
    render(){
      const { errors } = this.state;
      // console.log(errors);
      // console.log(this.state);
      const options = map(timezones,(val,key)=><option key={val} value={val}>{key}
                      </option>
                      );
        return (
            <form onSubmit={this.onSubmit}>

                <h1>
                Join our community!
                </h1>
                <TextFieldGroup
                  error={errors.username}
                  label="Username"
                  onChange={this.onChange}
                  value={this.state.username}
                  field="username"
                  type="text"
                />

                <TextFieldGroup
                  error={errors.email}
                  label="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  field="email"
                  type="text"
                />

                <TextFieldGroup
                  error={errors.password}
                  label="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  field="password"
                  type="password"
                />

                <TextFieldGroup
                  error={errors.passwordConfirmation}
                  label="PasswordConfirmation"
                  onChange={this.onChange}
                  value={this.state.passwordConfirmation}
                  field="passwordConfirmation"
                  type="password"
                />

                <div className={classnames("form-group", {'has-error': errors.timezone})}>
                    <label className="control-label">Timezone</label>
                    <select
                        className="form-control"
                        name="timezone"
                        onChange={this.onChange}
                        value={this.state.timezone}>
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                    </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                    Sign up </button>
                </div>
            </form>
        );
    }
}


// SignUpForm.propTypes={
//   userSignupRequest: React.PropTypes.func.isRequired
// }

export default SignUpForm;

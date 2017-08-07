import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div style={{padding:20}}>
      <div>
        <label htmlFor="name">Name </label>
        <br/>
        <Field name="name" component="input" type="text" />
      </div>
      <br/>
      <div>
        <label htmlFor="email">Email </label>
        <br/>
        <Field name="email" component="input" type="email" />
      </div>
      <br/>
      <div>
        <label htmlFor="password">Password </label>
        <br/>
        <Field name="password" component="input" type="password" />
      </div>
      <br/>      
      <div>
        <label htmlFor="textarea">Text Area </label>
        <br/>
        <Field name="textarea" component="input" type="textarea" />
        <h6>Create Your Secret Message.</h6>
      </div>
      <div>
        <br/>
        <button type="submit">Submit</button>
      </div>
    </div>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm;
import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div style={{padding:20}}>
        <div>
          <label htmlFor="email">Email</label>
          <br/>
          <Field name="email" component="input" type="email" />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password</label>
          <br/>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <br/>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;
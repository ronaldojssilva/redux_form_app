import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

//Component
const InitForm = (props) => {
  return (
    <div>
      <form action='"'>
         <div>
          <label htmlFor='name'>Teste</label>
          <Field
             name='name'
             placeholder='Entre your name'
             type="text"
             component="input"
          />
         </div>
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'initForm'
})(InitForm);
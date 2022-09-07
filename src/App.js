import {Field, reduxForm} from 'redux-form';

//Component
let InitForm = (props) => {
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

InitForm = reduxForm({
  form: 'initForm'
})(InitForm);


//Container
function App() {
  return (
    <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <InitForm/>
        </p>
    </div>
  );
}

export default App;

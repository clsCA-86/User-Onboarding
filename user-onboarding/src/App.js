import React, { useState } from 'react';
import './App.css';
import schema from './validation/formSchema';
import Form from './components/Form';
import * as yup from 'yup';
const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const handleSubmit = () => {
    // WIP
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ [name]: '' }))
      .catch(err => setFormErrors({ ...setFormErrors, [name]: err.errors[0] }))
  }
  const handleChange = (name, value) => {
    validate(name, value);

    }
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} />
    </div>
  );
}

export default App;

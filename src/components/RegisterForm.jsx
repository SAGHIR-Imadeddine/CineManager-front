import React, {useState} from 'react';
import {Input} from './Input.jsx';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import {nameValidator, emailValidator, ageValidator, passwordValidator} from '../assets/utils/InputValidator.js';
import { Navigate } from 'react-router-dom';

export default function RegisterForm() {
  
  const [err, setErr] = useState(null);
  const [formData, setFormData] = useState({ name : '',
                                             last_name : '',
                                             age : '',
                                             email : '',
                                             password : '',
                                             confirmation : ''
                                            });

   

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nameValidator(formData.name)) setErr('Names must have more than 3 characters');
    if (!nameValidator(formData.last_name)) setErr('last must have more than 3 characters');
    if (!ageValidator(formData.age)) setErr('Age must be more than 10 years');
    if (!emailValidator(formData.email)) setErr('Invalid Email');
    if (passwordValidator(formData.password)) setErr('Password should be 8 to 26 characters');
    if (formData.password !== formData.confirmation)setErr('Password Confirmation does not match');
    // console.info(nameValidator(formData.name))
    // console.info(nameValidator(formData.last_name))
    // console.info(nameValidator('bla'))
    // console.info(nameValidator('blla'))
    // console.info(nameValidator('bl'))
    console.error(err);
    if (!err){
      try {
        const response = await fetch('http://localhost:6000/api/auth/register', {

                                  method: 'POST',
                                  headers: {
                                      'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                      name: formData.name,
                                      email: formData.email,
                                      password: formData.password,
                                  }),
        });

        if(!response.ok) throw new Error('Error registering user');

        // const registered = response.json();

        const logger = await fetch('http://localhost:6000/api/auth/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      email: formData.email,
                      password: formData.password,
                  }),
              });

        if(!logger.ok) throw new Error('Error logging user');

        const data = await logger.json();

        const { token } = data;

        localStorage.setItem('token', token);

        setErr(null);

        Navigate('/');
      } catch (error) {
        console.error(error);
      }
    
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>

      <div id="form-logo"><img src={logo} alt="Logo"/></div>

        { (err) ? <p className='error-msg font-light-italic'>Error : {err}</p> : null}
        <Input label='Name' name='name' placeholder='Enter your Name...' onChange={handleChange} value={formData.name} required/>

        <Input label='Last Name' name='last' placeholder='Enter your Last-name...' onChange={handleChange} value={formData.last_name} required/>

        <Input label='Age' name='age' placeholder='Enter your Age...' onChange={handleChange} value={formData.age} required/>

        <Input label='Email' name='email' placeholder='Enter your Email...' onChange={handleChange} value={formData.email} required/>

        <Input label='Password' type='password' name='password' placeholder='Enter your Password...' onChange={handleChange} value={formData.password} required/>

        <Input label='Confirmation' type='password' name='confirmation' placeholder='Confirm your Password...' onChange={handleChange} value={formData.confirmation} required/>

      <div className="form-actions">
        <button type="submit">Submit</button>
        <p class="form-switch">Already Have An Account,<Link to='/auth/login'>Log-in?</Link></p>
      </div>

    </form>
  )
}

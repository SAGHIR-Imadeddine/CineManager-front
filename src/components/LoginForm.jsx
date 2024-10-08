import React, {useState} from 'react';
import {Input} from './Input.jsx';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { emailValidator } from '../assets/utils/InputValidator.js';

export default function LoginForm() {

  const [formData, setFormData] = useState({ email : '', password : ''});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailValidator(formData.email)) setError('Invalid Email');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

      if(!response.ok) throw new Error('Error registering user');

      const data = await response.json();

      const { token } = data;

      localStorage.setItem('token', token);


    } catch (error) {
      
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>

      <div id="form-logo"><img src={logo} alt="Logo"/></div>

        { error && <p className='error-msg font-light-italic'>Error : {error}</p>}
        <Input label='Email' name='email' placeholder='Enter your Email...' onChange={handleChange} value={formData.email} required/>


        <Input label='Password' type='password' name='password' placeholder='Enter your Password...' onChange={handleChange} value={formData.password} required/>



      <div className="form-actions">
        <button type="submit">Submit</button>
        <p class="form-switch">Already Have An Account,<Link to='/auth/register'>Log-in?</Link></p>
      </div>
    </form>
  )
}

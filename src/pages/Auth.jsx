import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../assets/styles/auth.css'

export default function Auth() {
  return (
    <div id='auth'>
      <Outlet/>
      <div className='goBack font-light-italic'><Link to='/'>Go Back Home..!</Link></div>
    </div>
  )
}

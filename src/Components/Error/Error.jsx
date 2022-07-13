import React from 'react';
import logo from './Error.png';
import './Error.css'

export default function Error() {
  return (
    <div className='main'>
    <div className='main-1'><h1>404 Page not found</h1></div>
    <img src={logo} className='main-2' alt="logo" />
    </div>
  )
}

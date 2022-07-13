import React from 'react';
import './Home.css';
import logo1 from './Home-1.png';
import logo2 from './Home-4.png';

export default function Home() {
  return (
    <div className='home-main'>
       <div className="home-1">
       <span className='home-1-1'>Hello, My name is</span>
       <br />
       <br />
       <br />
       <span className='home-1-2'>Hitesh Sukhpal</span>
       <br />
       <br />
       <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
       </div>

       <div className="home-2">
           <img src={logo2} className="home-2-2" alt="bck" />
           <img src={logo1} className="home-2-1"  alt="front"/>
       </div>
    </div>
  )
}

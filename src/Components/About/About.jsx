import React from 'react';
import './About.css';
import Chart from './Chart/Chart.jsx'

export default function About() {
  return (
    <div className='About-main'>
        <div className="About-main-1">
             <div className='About-main-1-1'></div>
             <div className='About-main-1-2'><h2>I Am UI Designer and Front End Developer from Barmer,Rajasthan.</h2>
             <br />
             <p>I enjoy Learning complex problems and turning them into simple and beautiful interface designs.I love structure and appearance of coding and always try to write elegant and efficient code weather be html,css,javascript,reactJs.</p>
             </div>
        </div>

        <div className="About-main-2">
            <Chart/>
        </div>
    </div>
  )
}

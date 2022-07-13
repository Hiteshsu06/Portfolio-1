import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='main'>
                <div className="main-1">
                    <img src={props.logo} className="main-1" alt="pi" />
                </div>

                <span className="main-2">
                {props.coarse}
                </span>
                
        </div>
  )
}

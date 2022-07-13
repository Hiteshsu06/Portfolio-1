import React from 'react';
import './Services.css';
import Card from './Card/Card';
import logo1 from './pic-1.jpg';
import logo2 from './pic-2.jpg';
import logo3 from './pic-3.jpg';
import logo4 from './pic-4.jpg';

export default function Services() {
  const card=[{id:'e1',logo:logo1, coarse:"HTML"},
              {id:'e2',logo:logo2, coarse:"CSS"},
              {id:'e3',logo:logo3, coarse:"JAVASCRIPT"},
              {id:'e4',logo:logo4, coarse:"REACT.JS"}
            ]
  return (
    <span className='service_main'>
      <Card logo={card[0].logo}
            coarse={card[0].coarse}
       />
      <Card logo={card[1].logo}
            coarse={card[1].coarse}
      />
      <Card logo={card[2].logo}
            coarse={card[2].coarse}
      />
      <Card logo={card[3].logo}
            coarse={card[3].coarse}
      />
    </span>
  )
}

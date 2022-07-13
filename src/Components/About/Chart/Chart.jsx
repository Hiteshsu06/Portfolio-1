import React from 'react';
import lol1 from './1.jpg';
import lol2 from './2.jpg';
import lol3 from './3.jpg';
import { Carousel } from 'react-bootstrap';

export default function Chart() {
  return (
  <>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lol1}
      alt="First slide"
      width="500px"
      height="300px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lol2}
      alt="Second slide"
      width="500px"
      height="300px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lol3}
      alt="Third slide"
      width="500px"
      height="300px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>
  )
}

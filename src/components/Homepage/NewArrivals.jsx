import React from "react";
import { Button,Carousel } from "react-bootstrap";
import "./Homepage.scss";
export default function NewArrivals() {
  return (
    <>
      <div className="section-title">
        <hr></hr>
        <div>
          <h4>NEW ARRIVALS</h4>
        </div>
        <Button>SHOP NOW</Button>
      </div>
      <div className="products">
        <Carousel>
          <Carousel.Item>
            
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

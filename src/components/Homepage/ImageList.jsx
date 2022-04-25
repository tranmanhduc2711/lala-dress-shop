import React from 'react'
import Image from './Image'
import Slider from "react-slick";
export default function ImageList({urlList}) {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slide">
        <Slider {...settings}>
          {urlList.map((url) => (
            <Image key={url.id} url={url}></Image>
          ))}
        </Slider>
      </div>
    </>
  );
}

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./quick.css";

const CenterMode = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slide-item">
          <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
            {images.map((image, index) => (
              <div className="slide-item" key={index}>
                <img src={image.url} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="image-list">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleThumbnailClick(index)}>
              <img
                src={image.url}
                alt={`Product ${index + 1}`}
                className={currentSlide === index ? "active" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterMode;

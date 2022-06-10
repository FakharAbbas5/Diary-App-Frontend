import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const slideImages = [
  {
    url: require("../../assets/slider1.jpg"),
    caption: "Slide 1",
  },
  {
    url: require("../../assets/slider2.jpg"),
    caption: "Slide 2",
  },
  {
    url: require("../../assets/slider3.jpg"),
    caption: "Slide 3",
  },
];

const ImageSlider = ({ style }) => {
  return (
    <div className='slide-container'>
      <Fade>
        {slideImages.map((fadeImage, index) => (
          <div className='each-fade' key={index}>
            <div className='image-container'>
              <img src={fadeImage.url} style={{ ...style }} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;

import { useState, useEffect } from "react";
import "./imageslider.css";
const Slide = (props) => {
  return (
    <>
      <div className="show-slide-imsge-container max-width">
        <button
          className="btn-slide-prev common-code-slide-btn"
          onClick={props.slidePrev}
        >
          {"<"}
        </button>

        <img
          src={props.image.link}
          alt="Sliderr_image"
          className="show-slide-image"
        />

        <button
          className="btn-slide-next common-code-slide-btn"
          onClick={props.slideNext}
        >
          {">"}
        </button>
      </div>
      {/* <h1> {props.image.id}</h1> */}
    </>
  );
};
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      link: "https://rukminim1.flixcart.com/flap/1688/280/image/7c304626faec2f51.jpg?q=50",
    },
    {
      id: 2,
      link: "https://rukminim1.flixcart.com/flap/1688/280/image/2212be517034761a.jpeg?q=50",
    },
    {
      id: 3,
      link: "https://rukminim1.flixcart.com/flap/1688/280/image/3b64a16cd22ed995.jpg?q=50",
    },
    {
      id: 4,
      link: "https://rukminim1.flixcart.com/flap/3376/560/image/6c91e2fce5605093.jpeg?q=50",
    },
    {
      id: 5,
      link: "https://rukminim1.flixcart.com/flap/1688/280/image/d5613f32f80b64b3.jpg?q=50",
    },
  ];

  const slideNext = (e) => {
    alert("slide Next");
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    alert("slide Prev");
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Slide
        image={slides[currentSlide]}
        slideNext={() => slideNext()}
        slidePrev={() => slidePrev()}
      />
    </>
  );
};
export default ImageSlider;

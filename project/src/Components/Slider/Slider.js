import { useEffect, useState } from "react";
import "./Slider.css";
import { slides } from "../../Objects/Objects";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    };
    const interval = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sliderStyle">
      <div
        className="sliderBG"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        alt={slides[currentIndex].title}
      >
        <div className="dotWrapper">
          {slides.map((slide, slideIndex) => (
            <div
              onClick={() => {
                goToSlide(slideIndex);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  goToSlide(slideIndex);
                }
              }}
              role="button"
              tabIndex={0}
              className="dots"
              key={slideIndex}
              aria-label={`Slide ${slideIndex + 1}`}
            >
              &#8226;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

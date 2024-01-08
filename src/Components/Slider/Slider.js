import { useEffect, useState } from "react";
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
  }, [currentIndex]);

  return (
    <section>
      <div className="h-full relative">
        <div
          className="w-full h-56 sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[88vh] bg-cover bg-center transition-all duration-500 relative"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          alt={slides[currentIndex].title}
        >
          <div className="flex justify-center absolute bottom-[-8px] w-full">
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
                className="cursor-pointer text-4xl md:text-5xl ml-4 text-secondary"
                key={slideIndex}
                aria-label={`Slide ${slideIndex + 1}`}
              >
                &#8226;
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

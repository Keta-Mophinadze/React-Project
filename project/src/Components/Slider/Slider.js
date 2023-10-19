import { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://c.wallhere.com/photos/ce/c5/Bladerunner_Blade_Runner_2049_cyberpunk_movies-1715419.jpg!d",
      title: "Blade Runner 2049",
    },
    {
      url: "https://coolidge.org/sites/default/files/featured_images/In%20the%20Mood%20for%20Love%201%20website.jpeg",
      title: "In the mood for love ",
    },
    {
      url: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2019/01/2001_a_space_odyssey_1280.jpg",
      title: "2001: A space odyssey",
    },
    {
      url: "https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/288775962_10159351283513285_3955769566426756520_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Z_F7oaVcP70AX-Qwmg6&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfBMcgHkHaswFxNyE9JytlkqdIppXwXPcsDmkW-DQqQ-3Q&oe=65337B5C",
      title: "Der Himmel über Berlin",
    },
    {
      url: "https://wellingtonfilms.nz/wp-content/uploads/2022/12/Taxi-Driver.jpg",
      title: "Taxi Driver",
    },
  ];
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
  }, [currentIndex, slides.length]);

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

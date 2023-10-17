import "./FilmOfTheDay.css";

const FilmOfTheDay = () => {
  const films = [
    {
      id: 1,
      title: "Drive My Car",
      year: "2021",
      url: "https://assets.eyefilm.nl/images/posters/_960x1392_crop_center-center_none/poster-Drive-My-Car-Ry%C3%BBsuke-Hamaguchi-JP-2021.jpg",
      description:
        "Two years after his wife's death, Yusuke Kafuku receives an offer to direct a play at a theater festival in Hiroshima. There, he meets Misaki, a reserved young woman assigned to be his chauffeur. As they spend time together, Kafuku starts to confront the mystery of his wife that quietly haunts him.",
    },
    {
      id: 2,
      title: "The Place Beyond the Pines",
      year: "2012",
      url: "https://m.media-amazon.com/images/M/MV5BMjc1OTEwNjU4N15BMl5BanBnXkFtZTcwNzUzNDIwOQ@@._V1_FMjpg_UX1000_.jpg",
      description:
        "A motorcycle stunt rider makes an ill-fated decision to commit a crime in order to support his child. The dire consequences of his actions and those of the policeman who targeted him, reverberate in the following years.",
    },
    {
      id: 3,
      title: "Like Father, Like Son",
      year: "2013",
      url: "https://flxt.tmsimg.com/assets/p10193332_p_v10_aa.jpg",
      description:
        "One day, Ryota and his wife get an unexpected phone call from the hospital. Keita, the six-year-old boy they have raised, is not their son. The news is hard to take for stern businessman Ryota. He meets his actual child, Ryusei, who has been brought up in a poorer, but more loving environment.",
    },
    {
      id: 4,
      title: "Lust, Caution",
      year: "2007",
      url: "https://aparoo.files.wordpress.com/2011/11/lust-caution-cover-1.jpg",
      description:
        "Set against the backdrop of a transforming country, a young woman finds herself swept up in a radical plot to assassinate a ruthless intelligence agent. As she immerses herself in her role as a cosmopolitan seductress, she becomes entangled in a dangerous game that will determine her fate.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * films.length);
  const selectedFilm = films[randomIndex];

  return (
    <div className="dailyFilmWrapper">
      <h1>Film Highlight of the Day</h1>
      {selectedFilm && (
        <div key={selectedFilm.id}>
          <div>
            <img src={selectedFilm.url} alt="film" />
          </div>
          <h2>{selectedFilm.title}</h2>
          <p>{selectedFilm.year}</p>
          <p>{selectedFilm.description}</p>
        </div>
      )}
    </div>
  );
};

export default FilmOfTheDay;

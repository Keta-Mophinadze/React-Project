import "./FilmOfTheDay.css";
import { films } from "../../Objects/Objects";

const FilmOfTheDay = () => {
  const randomIndex = Math.floor(Math.random() * films.length);
  const selectedFilm = films[randomIndex];

  return (
    <section>
      <div className="dailyFilmWrapper">
        <h1>Film Highlight of the Day</h1>
        {selectedFilm && (
          <div>
            <div>
              <img src={selectedFilm.url} alt="film of the day" />
            </div>
            <h2>{selectedFilm.title}</h2>
            <p>{selectedFilm.year}</p>
            <p>{selectedFilm.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilmOfTheDay;

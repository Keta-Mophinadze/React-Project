import "./FilmList.css";
import { festivalFilms } from "../../Objects/Objects";

const FilmList = () => {
  return (
    <section>
      <div className="festivalFilmList">
        {festivalFilms.map((element) => (
          <div key={element.id}>
            <img src={element.url} alt={element.title} />
            <h3>{element.title}</h3>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilmList;

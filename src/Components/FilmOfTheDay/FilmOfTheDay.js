import { films } from "../../Objects/Objects";

const FilmOfTheDay = () => {
  const randomIndex = Math.floor(Math.random() * films.length);
  const selectedFilm = films[randomIndex];

  return (
    <section>
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h1 className="text-accent mt-20 mb-6 text-xl">
          Film Highlight of the Day
        </h1>
        {selectedFilm && (
          <div className="bg-dark text-secondary p-4 md:p-10">
            <div className="pt-4">
              <img
                className="max-w-72 w-full mx-auto rounded-sm cursor-pointer"
                src={selectedFilm.url}
                alt="film of the day"
              />
            </div>
            <h2 className="text-lg md:text-2xl font-bold cursor-pointer mt-3">
              {selectedFilm.title}
            </h2>
            <p className="my-4">{selectedFilm.year}</p>
            <p className="text-base md:text-lg leading-6 tracking-wide">
              {selectedFilm.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilmOfTheDay;

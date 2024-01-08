import { festivalFilms } from "../../Objects/Objects";

const FilmList = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto my-8 md:my-16 p-4 md:p-6 text-secondary flex flex-col gap-6 md:flex-row">
        {festivalFilms.map((element) => (
          <div
            key={element.id}
            className="flex flex-col items-center w-full md:w-1/3 mb-8"
          >
            <img
              className="w-full h-60 md:h-64 object-cover cursor-pointer rounded"
              src={element.url}
              alt={element.title}
            />
            <h3 className="text-lg md:text-xl font-semibold mt-3 mb-1">
              {element.title}
            </h3>
            <p className="text-base">{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilmList;

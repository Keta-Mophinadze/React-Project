import { useAppContext } from "../../Context/Provider";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ReviewComponent = () => {
  const {
    state: { items, itemFetching, itemFetchingError },
  } = useAppContext();

  const navigate = useNavigate();

  function clickHandler(cardID) {
    navigate(`/review/${cardID}`);
  }

  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div>
      {itemFetching && <BarLoader className="mx-auto" color="#EBCD23" />}
      <div className="max-w-[1200px] w-full mx-auto justify-center items-stretch gap-5 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
        {items.slice(0, visible).map((element) => (
          <div
            className="max-w-[380px] w-full bg-[#000f1a] flex flex-col justify-center items-center p-[50px] rounded mx-auto"
            key={element.id}
          >
            <img
              className="max-w-64 w-full rounded-sm cursor-pointer"
              src={element.image}
              alt={element.title}
            />
            <h3 className="text-center text-base md:text-lg cursor-pointer text-secondary my-3">
              {element.title}
            </h3>
            <h4 className="text-secondary">{element.rating}</h4>
            <button
              className="w-36 h-8 mt-3 border-none rounded-sm text-sm cursor-pointer text-primary bg-accent hover:bg-hover"
              onClick={() => {
                clickHandler(element.id);
              }}
            >
              Review
            </button>
          </div>
        ))}
      </div>
      <div className="w-40 mx-auto">
        {" "}
        <button
          onClick={showMoreItems}
          className="w-40 h-8 border-none rounded-sm cursor-pointer text-base text-dark bg-accent hover:bg-hover"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ReviewComponent;

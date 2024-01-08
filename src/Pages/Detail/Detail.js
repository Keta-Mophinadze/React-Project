import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { useAppContext } from "../../Context/Provider";

const Detail = () => {
  const { cardID } = useParams();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };
  const {
    state: { items, itemFetching, itemFetchingError },
  } = useAppContext();

  const selectedItem = items.find((element) => element.id === cardID);

  return (
    <div className="max-w-xl w-full mx-auto mt-10 p-16 text-center bg-[#000f1a] text-secondary rounded-sm">
      {itemFetching && <BarLoader color="#36d7b7" />}
      {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
      {selectedItem && (
        <div>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="w-[90%] rounded-sm cursor-pointer mx-auto"
          />
          <h2 className="text-xl tracking-wide cursor-pointer my-4">
            {selectedItem.title}
          </h2>
          <h4 className="tracking-wide cursor-pointer">
            IMDb Rating - {selectedItem.rating}
          </h4>
          <h3 className="tracking-wide cursor-pointer my-2">
            {selectedItem.year}
          </h3>
          <h4 className="tracking-wide cursor-pointer">{selectedItem.genre}</h4>
          <p className="text-base md:text-lg tracking-wide cursor-pointer mt-2 mb-4">
            {selectedItem.description}
          </p>
        </div>
      )}
      <button
        onClick={clickHandler}
        className="w-28 rounded-sm text-primary bg-accent cursor-pointer py-2 hover:bg-hover"
      >
        Back
      </button>
    </div>
  );
};

export default Detail;

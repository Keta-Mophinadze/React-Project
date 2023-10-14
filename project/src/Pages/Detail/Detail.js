import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.css";
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
    <div className="container">
      {itemFetching && <BarLoader color="#36d7b7" />}
      {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
      {selectedItem && (
        <div>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <h2>{selectedItem.title}</h2>
          <h4>IMDb Rating - {selectedItem.rating}</h4>
          <h3>{selectedItem.year}</h3>
          <h4>{selectedItem.genre}</h4>
          <p>{selectedItem.description}</p>
        </div>
      )}
      <button onClick={clickHandler}>Back</button>
    </div>
  );
};

export default Detail;

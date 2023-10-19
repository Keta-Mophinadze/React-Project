import { useAppContext } from "../../Context/Provider";
import { BarLoader } from "react-spinners";
import "./ReviewComponent.css";
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
      {itemFetching && <BarLoader className="barLoader" color="#EBCD23" />}
      <div className="reviewWrapper">
        {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
        {items.slice(0, visible).map((element) => (
          <div className="reviewCard" key={element.id}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
            <h4>{element.rating}</h4>
            <button
              onClick={() => {
                clickHandler(element.id);
              }}
            >
              Review
            </button>
          </div>
        ))}
      </div>
      <div className="loadMoreBtn">
        {" "}
        <button onClick={showMoreItems}>Load More</button>
      </div>
    </div>
  );
};

export default ReviewComponent;

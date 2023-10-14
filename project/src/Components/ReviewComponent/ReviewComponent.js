import { useAppContext } from "../../Context/Provider";
import { BarLoader } from "react-spinners";
import "./ReviewComponent.css";
import { useNavigate } from "react-router-dom";

const ReviewComponent = () => {
  const {
    state: { items, itemFetching, itemFetchingError },
  } = useAppContext();

  const navigate = useNavigate();

  function clickHandler(cardID) {
    navigate(`/review/${cardID}`);
  }

  return (
    <div className="reviewWrapper">
      {itemFetching && (
        <BarLoader color="#EBCD23" style={{ margin: "0 auto" }} />
      )}

      {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
      {items.map((element) => (
        <div className="reviewCard" key={element.id}>
          <img src={element.image} alt={element.title} />
          <h3>{element.title}</h3>
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
  );
};

export default ReviewComponent;

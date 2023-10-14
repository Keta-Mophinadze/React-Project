import React, { useEffect } from "react";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import { useAppContext } from "../../Context/Provider";
import { fetchItems } from "../../API/Items";
import {
  startPending,
  receivedData,
  itemFetchError,
} from "../../Context/ActionCreators";

const Review = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch(startPending());

    fetchItems()
      .then((data) => {
        dispatch(receivedData(data));
      })

      .catch((err) => {
        dispatch(itemFetchError(err.message));
      });
  }, []);

  return (
    <div>
      <ReviewComponent />
    </div>
  );
};

export default Review;

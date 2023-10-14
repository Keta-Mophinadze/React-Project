import React from "react";
import { useAppContext } from "../../Context/Provider";
import { BarLoader } from "react-spinners";

const Review = () => {
  const {
    state: { items, itemFetching, itemFetchingError },
    // eslint-disable-next-line no-unused-vars
    dispatch,
  } = useAppContext();
  return (
    <div>
      {itemFetching && <BarLoader color="#36d7b7" />}
      {itemFetchingError && <h1>404: {itemFetchingError}</h1>}
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default Review;

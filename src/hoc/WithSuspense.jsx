import React, { Suspense } from "react";
import Loader from "../components/common/Loader/Loader";

export const WithSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />;
      </Suspense>
    );
  };
};

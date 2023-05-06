import React from "react";
import Loader from "../common/Loader";

export default function useLoadingHandler() {
  const [loading, setLoading] = React.useState(false);

  const showLoader = () => <Loader />;

  return { loading, setLoading, showLoader };
}

import React from "react";
import ErrorMessage from "../components/ErrorMessage";

const useErrorHandler = () => {
  const [error, setError] = React.useState(null);

  const resetError = () => setError(null);

  const showError = () => (
    <ErrorMessage errorMessage={error} onClose={resetError} />
  );

  return { error, setError, showError };
};

export default useErrorHandler;

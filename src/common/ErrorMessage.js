import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ errorMessage, onClose }) => {
  return (
    <span className="error">
      ❗ {errorMessage}
      <button onClick={onClose}>❌</button>
    </span>
  );
};

export default ErrorMessage;

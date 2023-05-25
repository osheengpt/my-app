import React from "react";

export default function TagInputBox({
  searchTerm,
  selectedItems,
  onRemove,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <div className="taginput-container">
      {selectedItems.map((item, i) => (
        <div key={i} className="taginput-button">
          {item}
          <button className="taginput-remove" onClick={onRemove(i)}>
            X
          </button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Enter skills"
        value={searchTerm}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

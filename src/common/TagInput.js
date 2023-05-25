import React, { useState } from "react";
import { filterTags } from "../utils/helper";
import { SKILL_TAGS } from "../utils/consts";
import TagInputBox from "./TagInputBox";
import "./TagInput.css";

export default function TagInput({ selectedItems, setSelectedItems }) {
  const [tagList, setTagList] = useState(SKILL_TAGS);
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");

  // handle the chnage in search input and dropdown items based on searchTerm
  const handleChange = (e) => {
    let searchTerm = e.target.value;
    setSearch(searchTerm);
    setTagList(filterTags(searchTerm, selectedItems));
  };

  // handle select item from dropdown
  const handleSelect = (e) => {
    let newSelectedItems = [...selectedItems, e.target.textContent];
    setSelectedItems(newSelectedItems);
    setSearch("");
    setTagList(filterTags("", newSelectedItems));
    setShowList(false);
  };

  // handle remove item from selected Items based on index
  const handleRemove = (index) => {
    return () => {
      let newSelectedItems = selectedItems.filter((_, i) => i !== index);
      setSelectedItems(newSelectedItems);
      setTagList(filterTags(search, newSelectedItems));
    };
  };

  const handleInputFocus = () => {
    setShowList(true);
  };

  return (
    <div className="taginput">
      <TagInputBox
        searchTerm={search}
        selectedItems={selectedItems}
        onRemove={handleRemove}
        onChange={handleChange}
        onFocus={handleInputFocus}
      />
      {tagList.length > 0 && (
        <ul
          className={`taginput-list ${showList ? "showlist" : ""}`}
          onClick={handleSelect}
        >
          {tagList.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

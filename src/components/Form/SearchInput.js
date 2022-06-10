import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ placeholder, onChange, onSubmit, name }) => {
  return (
    <div className='searchInputContainer u-margin-top-small'>
      <input
        type='text'
        className='searchInput'
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <button className='themedIconButton' onClick={onSubmit}>
        <SearchIcon style={{ color: "white" }} />{" "}
      </button>
    </div>
  );
};

export default SearchInput;

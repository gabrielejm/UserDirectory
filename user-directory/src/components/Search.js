import React from "react";

const Search = ({ handleChange }) => {
  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} type="text" placeholder="Search employees" />
      </form>
    </div>
  );
};

export default Search;

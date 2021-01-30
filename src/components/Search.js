import React from "react";
import "./Search.css";

const Search = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="div">
      <form className="size">
        <input className="form-control" onChange={(e) => handleChange(e)} type="text" placeholder="Search employees" />
      </form>
    </div>
  );
};

export default Search;

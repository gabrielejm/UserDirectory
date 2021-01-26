import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-top">
        <div className="header-text">
          <h1>Employee Directory</h1>
          <p>Click on carrots to filter by heading or use the search box to narrow your results!</p>
        </div>
      </div>
      <div className="header-bottom">
        <form>
          <input className="form-control" placeholder="Search employees" />
        </form>
      </div>
    </div>
  );
};

export default Header;

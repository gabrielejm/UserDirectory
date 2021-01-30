import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-top">
        <div className="header-text">
          <h1>Employee Directory</h1>
          <p>Click on Name to filter alphabetically or use the search box to narrow your results!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

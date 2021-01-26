import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Dob</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>pic</td>
            <td>name</td>
            <td>phone number</td>
            <td>email</td>
            <td>dob</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

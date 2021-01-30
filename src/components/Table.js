import React from "react";
import "./Table.css";

const Table = ({ users, sortbyName }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => sortbyName()}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Dob</th>
          </tr>
        </thead>
        <tbody>
          {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({ login, name, picture, phone, email, dob }) => {
              return (
                <tr key={login.uuid}>
                  <td>
                    <img src={picture.medium} />
                  </td>
                  <td>
                    {name.first} {name.last}
                  </td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{dob.date}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

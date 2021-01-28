import React from "react";
import "./Table.css";

const Table = ({ users }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Dob</th>
          </tr>
        </thead>
        <tbody>
          {users[0] !== undefined && users[0].name !== undefined ? (
            users.map(({ name, picture, phone, email, dob }) => {
              return (
                <tr>
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

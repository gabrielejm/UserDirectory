import React, { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import API from "../utils/API";

const Main = () => {
  const [users, setUsers] = useState([{}]);
  const [filteredUsers, setFilteredUsers] = useState([{}]);
  useEffect(() => {
    API.search()
      .then((res) => {
        setUsers(res.data.results);
        setFilteredUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const query = event.target.value;
    const queryList = users.filter((user) => {
      let values = Object.values(user).join("").toLowerCase();
      return values.indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredUsers(queryList);
  };
  return (
    <div>
      <Header />
      <Search handleChange={handleChange} />
      <Table users={filteredUsers} />
    </div>
  );
};

export default Main;

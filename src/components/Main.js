import React, { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import API from "../utils/API";

const Main = () => {
  const [users, setUsers] = useState([{}]);
  const [filteredUsers, setFilteredUsers] = useState([{}]);
  const [sortedName, setSortedName] = useState(users);
  const [sortType, setSortType] = useState();

  useEffect(() => {
    API.search()
      .then((res) => {
        setUsers(res.data.results);
        setFilteredUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortByName = () => {
    const userList = users.sort(function (a, b) {
      // console.log(a.name.first, "a");
      const test = a.name.first;
      const testTwo = b.name.first;
      const textA = test.toUpperCase();
      const textB = testTwo.toUpperCase();
      const ascendingSort = textA < textB ? -1 : textA > textB ? 1 : 0;
      const desendingSort = textA > textB ? -1 : textA < textB ? 1 : 0;
      return ascendingSort;
    });
    setSortedName(userList);
    console.log(userList);
  };

  const handleChange = (event) => {
    //Grabbing value of search bar
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
      <Table users={filteredUsers} sortbyName={sortByName} />
    </div>
  );
};

export default Main;

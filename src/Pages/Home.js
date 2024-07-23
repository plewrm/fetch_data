import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Home = () => {
  const [user, setUser] = useState("");

  const loadUser = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(result.data.reverse());
  };

  useEffect(() => {
    loadUser();
  }, []);


  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {user &&
              user?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;

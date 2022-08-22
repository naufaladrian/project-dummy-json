import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Users() {
  // data func

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/users");
    setIsLoading(false);
    setData(data.data.users);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Users</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>last Name</th>
            <th>User Name</th>
            <th>Image</th>
            <th>Age</th>
            <th>Address</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="8">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.username}</td>
              <td>{item.age}</td>
              <td>
                <img className="img" src={item.image} />
              </td>
              <td>
                {item.address.address} {item.address.city}{" "}
                {item.address.postalCode} {item.address.state}
              </td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

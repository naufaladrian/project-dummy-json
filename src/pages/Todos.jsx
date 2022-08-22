import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Todos() {
  // data func
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/todos");
    setIsLoading(false);
    setData(data.data.todos);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Todos</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="4">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>{item.completed === true ? "Finished" : "Unfinished"}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

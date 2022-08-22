import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Comments() {
  // data func
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/comments");
    setIsLoading(false);
    setData(data.data.comments);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Comments</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Body</th>
            <th>Post Id</th>
            <th>User Id</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="5">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.body}</td>
              <td>{item.postId}</td>
              <td>{item.user.id}</td>
              <td>{item.user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

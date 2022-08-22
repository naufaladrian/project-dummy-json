import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Posts() {
  // data func
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/posts");
    setIsLoading(false);
    setData(data.data.posts);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Posts</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>User Id</th>
            <th>Tags</th>
            <th>Reactions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="6">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.userId}</td>
              <td>
                <ul>
                  {item.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </td>

              <td>{item.reactions}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

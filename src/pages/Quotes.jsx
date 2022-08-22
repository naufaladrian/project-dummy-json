import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Quotes() {
  // data func
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/quotes");
    setIsLoading(false);
    setData(data.data.quotes);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Quotes</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="3">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.quote}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

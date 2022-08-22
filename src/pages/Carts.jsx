import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Carts() {
  // data func

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/carts");
    setIsLoading(false);
    setData(data.data.carts);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <div className="title">
        <h1>Carts</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Products Id</th>
            <th>Products Title</th>
            <th>Products Price</th>
            <th>Products Quantity</th>
            <th>Products Total</th>
            <th>Products Discount Percentage</th>
            <th>Products Discounted Price</th>
            <th>Total</th>
            <th>Discounted Total</th>
            <th>User Id</th>
            <th>Total Products</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="13">
                <div className="text-center py-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              </td>
            </tr>
          )}
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.products[0].id}</td>
              <td>{item.products[0].title}</td>
              <td>{item.products[0].price}</td>
              <td>{item.products[0].quantity}</td>
              <td>{item.products[0].total}</td>
              <td>{item.products[0].discountPercentage}</td>
              <td>{item.products[0].discountedPrice}</td>
              <td>{item.total}</td>
              <td>{item.discountedTotal}</td>
              <td>{item.userId}</td>
              <td>{item.totalProducts}</td>
              <td>{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

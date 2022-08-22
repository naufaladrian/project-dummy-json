import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner, Modal, Button, Carousel } from "react-bootstrap";

export default function Products() {
  // car
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // images func
  const [show, setShow] = useState(false);

  function handleShow(image) {
    setShow(true);
    setListImage(image);
  }
  // data func

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [listImage, setListImage] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://dummyjson.com/products");
    setIsLoading(false);
    setData(data.data.products);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: "100%" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {listImage.map((item, i) => (
                <Carousel.Item key={i}>
                  <img className="d-block w-100" src={item} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
      <div className="title">
        <h1>Products</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td rowSpan="4" colSpan="11">
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
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.discountPercentage}</td>
              <td>{item.rating}</td>
              <td>{item.stock}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>
                <img className="img" src={item.thumbnail} />
              </td>
              <td>
                <Button
                  className="me-2 mb-2"
                  onClick={() => handleShow(item.images)}
                >
                  Full screen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

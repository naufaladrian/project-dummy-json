import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Carts from "./pages/Carts";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Quotes from "./pages/Quotes";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/carts">Carts</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/comments">Comments</Nav.Link>
            <Nav.Link href="/quotes">Quotes</Nav.Link>
            <Nav.Link href="/todos">Todos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              메인페이지
              <Link to="/detail">디테일로</Link>
            </div>
          }
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/about" element={<div>어바웃페이지</div>} />
        <Route />
        <Route />
      </Routes>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">설핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈으로</Nav.Link>
            <Nav.Link href="#features">상품</Nav.Link>
            <Nav.Link href="#pricing">질문 </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Product shoes={shoes[i]} i={i}></Product>;
          })}
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" alt="Shoes 1" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;

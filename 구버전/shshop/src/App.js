import "./App.css";
//부트 스트랩 시작
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//부트 스트랩 끝
//다른 폴더 불러오기
import shoesData from "./data/shoes";
//다른 폴더 불러오기 끝

import { useState } from "react";

function App() {
  let [shoes] = useState(shoesData);
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">설핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">다음</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 네비바끝 */}

      <Container>
        <Row>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/shoe1.webp"} alt="신발1" />
            <h4>신발1</h4>
            <p>짝퉁</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/shoe1.webp"} alt="신발1" />
            <h4>신발2</h4>
            <p>짝퉁</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/shoe1.webp"} alt="신발1" />
            <h4>신발3</h4>
            <p>짝퉁</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

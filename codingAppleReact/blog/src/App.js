import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [a, b] = useState("남자 코트 추천");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 프로젝트 시작</h4>
      </div>
      <div className="list">
        <h4>블로그 글 제목 = {post}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>블로그 글 제목 = {a}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>블로그 글 제목은 {post}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

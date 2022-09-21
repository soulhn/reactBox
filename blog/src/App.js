/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import {useState, useTransition} from "react";

function App() {
  let post = "하양 우동 맛집";
  let [titleName, titleChanger] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [likeCount, likeCountChanger] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>SoulHn 블로그</h4>
        <button
          onClick={() => {
            let titleNameCopy = [...titleName];
            titleNameCopy[0] = "여자코트 추천";
            titleChanger(titleNameCopy);
          }}
        >
          첫번째글바꾸기
        </button>
        <button
          onClick={() => {
            let titleNameCopy = [...titleName].sort();
            titleChanger(titleNameCopy);
          }}
        >
          배열 정렬하기
        </button>
      </div>
      <div className="list">
        <h4>
          {titleName[0]} <span onClick={() => likeCountChanger(likeCount + 1)}>👍</span> {likeCount}
        </h4>
        <p>9월 19일 발행</p>
      </div>

      <div className="list">
        <h4>{titleName[1]}</h4>
        <p>9월 19일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            modal !== true ? setModal(true) : setModal(false);
          }}
        >
          {titleName[2]}
        </h4>
        <p>9월 19일 발행</p>
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState, useTransition } from "react";

function App() {
  let post = "하양 우동 맛집";
  let [titleName, titleChanger] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [likeCount, likeCountChanger] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0, 1, 2);
  let [inputValue, setInputValue] = useState("");

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
      {/* <div className="list">
        <h4>
          {titleName[0]} <span onClick={() => likeCountChanger(likeCount + 1)}>👍</span> {likeCount}
        </h4>
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
      </div> */}

      {titleName.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {titleName[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let likeCopy = [...likeCount];
                  likeCopy[i] = likeCopy[i] + 1;
                  likeCountChanger(likeCopy);
                }}
              >
                👍
              </span>
              {likeCount[i]}
            </h4>
            <p>9월 19일 발행</p>
            <button
              onClick={() => {
                let copy = [...titleName];
                copy.splice(i, 1);
                titleChanger(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...titleName];
          copy.unshift(inputValue);
          titleChanger(copy);
        }}
      >
        글 발행
      </button>

      {modal === true ? <Modal title={title} titleName={titleName} titleChanger={titleChanger} /> : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titleName[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let titleNameCopy = [...props.titleName];
          titleNameCopy[0] = "여자 코트 추천";
          props.titleChanger(titleNameCopy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

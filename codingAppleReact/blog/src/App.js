// eslint-disable

import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, postTitleChanger] = useState(["가가가", "나나나", "다다다"]); //글 제목
  let [like, likeChanger] = useState(0); // 좋아요 저장 공간

  function likeCounter() {
    likeChanger(like + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 프로젝트 시작</h4>
      </div>
      {/* 프로젝트 헤더 부분 끝 */}
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy[0] = "여자 코트 추천";
          postTitleChanger(copy);
        }}
      >
        글 수정
      </button>
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.sort();
          postTitleChanger(copy);
        }}
      >
        가나다순정렬
      </button>
      <div className="list">
        <h4>
          {postTitle[0]} <span onClick={likeCounter}>❤</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

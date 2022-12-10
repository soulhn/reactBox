// eslint-disable

import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, postTitleChanger] = useState(["감자맛집 추천", "남자코트 추천", "다사맛집 추천"]); //글 제목
  let [like, likeChanger] = useState([0, 0, 0]); // 좋아요 저장 공간
  let [modal, setModal] = useState(false); //모달창 켜고 닫기

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

      {postTitle.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {postTitle[i]}{" "}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeChanger(copy);
                }}
              >
                ❤
              </span>{" "}
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal === true ? <Modal color={"yellow"} postTitle={postTitle} /> : null}

      <Test />
    </div>
  );
}

// 모달 컴포넌트 작성
function Modal(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.postTitle}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  );
}

// 테스트 컴포넌트 작성
function Test() {
  return (
    <>
      <div>
        <h1>테스트 컴포넌트 입니다.</h1>
      </div>
    </>
  );
}
// map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
export default App;

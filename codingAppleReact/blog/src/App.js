// eslint-disable

import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, postTitleChanger] = useState(["감자맛집 추천", "남자코트 추천", "다사맛집 추천"]); //글 제목
  let [like, likeChanger] = useState([0, 0, 0]); // 좋아요 저장 공간
  let [modal, setModal] = useState(false); //모달창 켜고 닫기
  let [title, setTitle] = useState();
  let [userInput, setUserInput] = useState("");

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
                setTitle(i);
              }}
            >
              {postTitle[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeChanger(copy);
                }}
              >
                ❤
              </span>
              {/*  e.stopPropagation(); 이벤트 버블링을 방지하는 코드 */}
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                postTitleChanger(copy);
              }}
            >
              삭제버튼
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setUserInput(e.target.value);
          console.log(userInput);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(userInput);
          postTitleChanger(copy);
        }}
      >
        글발행
      </button>
      {/* 입력값 콘솔창에 출력하기 */}

      {modal === true ? <Modal title={title} postTitleChanger={postTitleChanger} color={"yellow"} postTitle={postTitle} /> : null}

      <Test />
    </div>
  );
}

// 모달 컴포넌트 작성
function Modal(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.postTitle[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => props.postTitleChanger(["여자맛집 추천", "남자코트 추천", "다사맛집 추천"])}>글수정</button>
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
// input 다루기 2 : 블로그 글발행 기능 만들기

// 클래스로 컴포넌트 만들기(구 문법)

class Modal1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>안녕</div>;
  }
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "kim",
      age: 20,
    };
  }

  render() {
    return <div>안녕 {this.state.name}</div>;
  }
}

class Modal3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }

  render() {
    return <div>안녕 {this.props.프롭스이름}</div>;
  }
}

export default App;

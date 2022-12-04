import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 프로젝트 시작</h4>
      </div>
      <h4>블로그 글 제목 = {post}</h4>
    </div>
  );
}

export default App;

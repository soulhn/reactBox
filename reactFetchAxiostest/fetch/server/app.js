const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); //cors 정책을 해결해주는 미들 웨어

app.use(express.json()); // bodyPasing json 구문 분석
app.use(express.urlencoded({ extended: true })); // x-www-form-url 인코딩용
//body parsing을 위한

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: "false", //했는지 안했는지 여부
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  // 프론트에서 서버로 데이터 보낼 때 body에 데이터를 넣어서 보냄
  const { text, done } = req.body; //express에서 바디에서 데이터를 꺼내 쓰려면 bodypareser가 필요, 기본적으로 지원
  console.log("req.body : ", req.body); //body 태그로 넘어오는 지 확인
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("성공했어요! app.post /api/todo");
});

app.listen(4000, () => {
  console.log("4000 server start");
}); //콜백함수를 통하여 서버 실행 시 알려줌

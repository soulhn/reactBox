import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/todo");
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault(); //form 태그 기본 동작 막기
    const text = e.target.text.value;
    const done = e.target.done.checked;
    //const done = e.target.done.value; //done의 value는 on 값을 준다.
    axios.post("http://localhost:4000/api/todo", { text, done });
    fetchData();
  };
  // fetch("http://localhost:4000/api/todo", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     text,
  //     done,
  //   }),
  // }).then(() => fetchData());

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
        {/* form에 sumbit에 기본 동작 /query-parameter에 name이랑 값을 넣고 get 요청을 보냄 */}
      </form>

      {todoList.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Yes" : "No"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

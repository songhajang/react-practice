const { useState } = require("react");

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos :) ({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
          value={toDo}
        />
        <button type="submit" onClick={onSubmit}>
          App To Do
        </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

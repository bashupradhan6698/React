// import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    id: 1,
    title: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    title: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  { id: 3, title: "Watch a classic movie", completed: false, userId: 4 },
  {
    id: 4,
    title:
      "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
];

const Todos = () => {
  // console.log(uuidv4());
  // return;
  return (
    <div>
      <h1>Todos</h1>
      <ul style={{ display: "block", listStyleType: "disc" }}>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
        {/* <li>{todos[0].todo}</li> 
        <li>{todos[1].todo}</li>
        <li></li>
        <li></li> */}
      </ul>
    </div>
  );
};

export default Todos;

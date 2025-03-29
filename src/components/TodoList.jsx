import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

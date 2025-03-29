export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
      <li>
        <span 
          onClick={() => toggleTodo(todo.id)} 
          style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        >
          {todo.text}
        </span>
        <button onClick={() => removeTodo(todo.id)}>❌</button>
      </li>
    );
  }
  
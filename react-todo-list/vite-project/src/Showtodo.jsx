import React from 'react'

function deleteTodo(id) {
    console.log(`Todo with id ${id} deleted`);
    }
export default function Showtodo({ todos }) {
  // This component will display the list of todos passed as props
  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

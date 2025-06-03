import React from 'react';

export default function Todo() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Deploy the App', completed: false }
    ]);

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }
    

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Todo List</h2>

            <div className="flex mb-6">
                <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="todo-input"
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
                    onClick={() => addTodo(document.getElementById('todo-input').value)}
                >
                    Add Todo
                </button>
            </div>

            <div>
                {todos.map(todo => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 mb-3"
                    >
                        <span className="text-gray-700">{todo.text}</span>
                        <button
                            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

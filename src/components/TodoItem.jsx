import React from 'react';

export default function TodoItem({id, text, complete, deleteTodo, toggleTodo}) {
    return (
        <div>
            <input
                type="checkbox"
                onChange={() => toggleTodo(id)}
                checked={complete}
            />
            <span>{text}</span>
            <button onClick={() => deleteTodo(id)}>X</button>
        </div>
    );
}

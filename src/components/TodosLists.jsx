import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    asyncAddTodo,
    asyncReceiveTodos,
    asyncDeleteTodo,
    asyncToggleTodo,
} from '../states/todos/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function TodosList() {
    const todos = useSelector(states => states.todos); // TODO : Get todos from store
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveTodos());
    }, [dispatch]);

    function onAddTodo(text) {
        dispatch(asyncAddTodo(text));
        // TODO: dispatch action ADD_TODO
    }

    function onDeleteTodo(id) {
        // TODO: dispatch action DELETE_TODO
        dispatch(asyncDeleteTodo(id));
    }

    function onToggleTodo(id) {
        // TODO: dispatch action TOGGLE_TODO
        dispatch(asyncToggleTodo(id));
    }

    return (
        <div>
            <h3>My Todos</h3>
            <TodoInput addTodo={onAddTodo} />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <TodoItem
                            {...todo}
                            toggleTodo={onToggleTodo}
                            deleteTodo={onDeleteTodo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

import mockAPI from '../../data/mockAPI'; // Import the 'mockAPI' module

const ActionType = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    RECEIVE_TODOS: 'RECEIVE_TODOS',
};

function addTodoActionCreator({id, text}) {
    return {
        type: ActionType.ADD_TODO,
        payload: {
            id,
            text,
            complete: false,
        },
    };
}

function deleteTodoActionCreator(id) {
    return {
        type: ActionType.DELETE_TODO,
        payload: {
            id,
        },
    };
}

function toggleTodoActionCreator(id) {
    return {
        type: ActionType.TOGGLE_TODO,
        payload: {
            id,
        },
    };
}

function receiveTodosActionCreator(todos) {
    return {
        type: ActionType.RECEIVE_TODOS,
        payload: {
            todos,
        },
    };
}

function asyncReceiveTodos() {
    return async dispatch => {
        const todos = await mockAPI.getTodos();
        dispatch(receiveTodosActionCreator(todos));
    };
}

function asyncAddTodo(text) {
    return async dispatch => {
        const {id} = await mockAPI.addTodo(text);
        dispatch(addTodoActionCreator({id, text}));
    };
}

function asyncDeleteTodo(id) {
    return async dispatch => {
        await mockAPI.deleteTodo(id);
        dispatch(deleteTodoActionCreator(id));
    };
}

function asyncToggleTodo(id) {
    return async dispatch => {
        dispatch(toggleTodoActionCreator(id));
        try {
            await mockAPI.toggleTodo(id);
        } catch (error) {
            alert(error.message);
            // rollback state change with re-toggling to-do
            dispatch(toggleTodoActionCreator(id));
        }
    };
}

export {
    ActionType,
    addTodoActionCreator,
    deleteTodoActionCreator,
    toggleTodoActionCreator,
    receiveTodosActionCreator,
    asyncReceiveTodos,
    asyncAddTodo,
    asyncDeleteTodo,
    asyncToggleTodo,
};

import {ActionType} from './todos/action';

function todoDeletionCheck(store) {
    return next => action => {
        if (action.type === ActionType.DELETE_TODO) {
            const {todos} = store.getState();
            const todoTobeDeleted = todos.find(
                todo => todo.id === action.payload.id
            );

            if (!todoTobeDeleted.complete) {
                alert('tidak bisa menghapus Todo yang belum selesai');
                return;
            }
        }

        return next(action);
    };
}

function thunk(store) {
    return next => action => {
        if (typeof action === 'function') {
            return action(store.dispatch, store.getState);
        }

        return next(action);
    };
}

export {todoDeletionCheck, thunk};

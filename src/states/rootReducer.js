import {goalsReducer} from './goals/reducer';
import {todosReducer} from './todos/reducer';

export default function rootReducer(state = {}, action = {}) {
    return {
        todos: todosReducer(state.todos, action),
        goals: goalsReducer(state.goals, action),
    };
}

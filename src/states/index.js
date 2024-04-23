import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {thunk, todoDeletionCheck} from './middlewares';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, todoDeletionCheck)
);

export {store};

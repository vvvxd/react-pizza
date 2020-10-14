import { createStore, applyMiddleware, compose } from 'redux';
import rootReduser from './redusers';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReduser,
    composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

export default store;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore,compose, applyMiddleware} from 'redux';
import todoListReducer from './reducers/todolist.reducer';
import todoListFormReducer from './reducers/todolistform.reducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

const reducers = {
    theTodos:todoListReducer,
    theTodoForm:todoListFormReducer
}
const combine = combineReducers(reducers); 
// const store = createStore(combine);
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combine, composeEnhancers(
    applyMiddleware(thunk)
  ));
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

const logger = ({getState}) => next => action => {
    console.log('Dispatching this type of action:', action)
    next(action)
}

let store = createStore(reducer, applyMiddleware(logger,thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById("root")
        );

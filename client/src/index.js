import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import App from "./components/app";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware( reducers )}>
        <App />
    </Provider>,
    document.getElementById( 'root' ) 
);
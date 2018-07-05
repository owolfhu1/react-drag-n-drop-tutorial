import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Board from "./lone-knite/Board";
import { observe } from "./lone-knite/Game";

const rootEl = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition} />,
        rootEl
    )
);


registerServiceWorker();

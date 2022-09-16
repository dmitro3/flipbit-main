import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './redux/reducers/rootReducer';
import './index.css';
import './App.css';
import "./styles/style.css"
import reportWebVitals from './reportWebVitals';
import AppRouter from './appRouter';
import store from './store';

// const store = createStore(rootReducer, composeWithDevTools())
const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

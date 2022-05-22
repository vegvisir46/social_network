import store from "./redux/redux-store";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
reportWebVitals();


// SWITCH R-R-D (last 6.3.0)
// npm uninstall react-router-dom
// npm i react-router-dom@5.2.0



// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from "./redux/redux-store";
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
//
// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App
//                     // store={store}
//                     // state={state}
//                     // dispatch={store.dispatch.bind(store)}
//                 />
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>, document.getElementById('root')
// );
//
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";


let rerenderEntireTree = (state) => {
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        // store={store}
                        // state={state}
                        // dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree(store.getState())); // old
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

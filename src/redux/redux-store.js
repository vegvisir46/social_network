import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    appRed: appReducer,
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; // для дебага

export default store;
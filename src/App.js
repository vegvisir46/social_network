import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

// function App() {
const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sitebar={props.state.sitebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                               state={props.state.messagesPage}
                               dispatch={props.dispatch}/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
                {/*<Profile/>*/}
                {/*<Dialogs/>*/}
            </div>

        </div>
    );
};

export default App;

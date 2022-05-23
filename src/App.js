import logo from './logo.svg';
import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from './components/Profile/ProfileContainer';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import Login from "./components/Login/Login";

// function App() {
const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>}/>

                <Route path="/dialogs/"
                       render={() => <DialogsContainer/>}/>

                <Route path="/news/" render={() => <News/>}/>

                <Route path="/music/" render={() => <Music/>}/>

                <Route path='/users'
                       render={() => <UsersContainer/>}/>

                <Route path="/settings/" render={() => <Settings/>}/>

                <Route path="/login/" render={() => <Login/>}/>

                {/*<Profile/>*/}
                {/*<Dialogs/>*/}
            </div>

        </div>
    );
};

export default App;


// ========= for v6 r-r-d =========
// const App = () => {
//
//     return (
//         <div className='app-wrapper'>
//             <Header/>
//             <Navbar/>
//             <div className='app-wrapper-content'>
//                 <Routes>
//                     <Route path="/profile/:userId?"
//                            render={ () => <ProfileContainer /> }/>
//                     <Route path="/dialogs/*"
//                            element={<DialogsContainer/>}/>
//                     <Route path="/news/*" element={<News/>}/>
//                     <Route path="/music/*" element={<Music/>}/>
//                     <Route path="/users/*"
//                            element={<UsersContainer/>}/>
//                     <Route path="/settings/*" element={<Settings/>}/>
//                 </Routes>
//                 {/*<Profile/>*/}
//                 {/*<Dialogs/>*/}
//             </div>
//
//         </div>
//     );
// };
//
// export default App;

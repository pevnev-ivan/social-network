import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {actionTypes} from "./types/types";
import {GlobalStateType, StoreType} from "./types/GlobalTypes";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {UsersContainer} from "./components/Users/UsersContainer";

type PropsType = {
    state: GlobalStateType
    dispatch: (action: actionTypes) => void
    store: StoreType
}

function App() {
    return (
        <>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>

                    <div className={'app-wrapper-content'}>
                        <Route path={'/Profile'} render={() => <Profile/>}/>
                        <Route path={'/Dialogs'} render={() => <Dialogs/>}/>
                        <Route path={'/Users'} render={() => <UsersContainer/>}/>
                        <Route path={'/News'} render={() => <News/>}/>
                        <Route path={'/Music'} render={() => <Music/>}/>
                        <Route path={'/Settings'} render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

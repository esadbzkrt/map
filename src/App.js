import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "./components/Header/Header";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import MapPage from './components/MapPage/MapPage';
import { useState } from 'react';

function App() {

    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
        <div className="App">
            <Header user={user} setUser={setUser} isLogin={isLogin} setIsLogin={setIsLogin}  />
            <Routes>
                <Route path="/" exact element={<Login user={user} setUser={setUser} isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/map" exact element={<MapPage isLogin={isLogin}/>} />
                <Route path="/signup" exact element={<Signup/>} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;

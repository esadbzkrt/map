import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/Header/Header";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Map from './components/Map/Map';
import { useState } from 'react';

function App() {

    const [user, setUser] = useState();

    return (
        <Router>
        <div className="App">
            <Header user={user} setUser={setUser}  />
            <Routes>
                <Route path="/" exact element={<Login user={user} setUser={setUser} />} />
                <Route path="/map" exact element={<Map user={user}/>} />
                <Route path="/signup" exact element={<Signup/>} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;

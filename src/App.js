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

function App() {
    return (
        <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Map/>} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;

import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
}

export default App;

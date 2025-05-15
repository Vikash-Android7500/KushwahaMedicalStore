import "./App.css";
import {Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./component/navBar/navBar";

function App() {
  return (
    <div className="App select-none">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

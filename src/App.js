import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

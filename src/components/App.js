import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

import "../styles/App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

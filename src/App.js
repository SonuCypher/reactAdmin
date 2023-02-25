import React, { useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import { NameContext } from "./context/AppContext";
import Signup from "./components/signUp/signup";

function App() {
  const [name, setName] = useState("Name");
 
  

  return (
    <>
        <nav className="navbar">
          <div>
            <Link>{name}</Link>
          </div>
          <div>
            <Link to="/about">about</Link>
          </div>
          <div>
            <Link to="/signup">LOGIN/SIGNUP</Link>
          </div>
        </nav>
      <NameContext.Provider value={{name,setName}}>
        <Routes>
          <Route path="/about" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <main>
          <h1 >{name}</h1>
        </main>
        {/* <Header /> */}
      </NameContext.Provider>
    </>
  );
}
export default App;

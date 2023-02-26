import React, { useContext, useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import { NameContext,FirebaseContext } from "./context/AppContext";
import Signup from "./components/signUp/signup";
import Login from "./components/Login/login";
import { db,auth } from "./firebase/config";

function App() {
  // const [name, setName] = useState("Name");
  // const {Firebase}=useContext(FirebaseContext)
  const {name}=useContext(NameContext)
  
 
  

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
      
        <Routes>
          <Route path="/about" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <main>
          <h1 >{name}</h1>
          <button onClick={async()=>{
            const data=await db.collection('users').get().data()
            console.log(data)
          }}>Click</button>
        </main>
        {/* <Header /> */}
     
    </>
  );
}
export default App;

import React from "react";
import { Link, Route, Routes,Outlet } from "react-router-dom";
import Header from './components/Header/Header'
import "./App.css";


function App() {
  return (
    <>
    <nav className="navbar">
      <div><Link >Name</Link></div>
      <div><Link to='/about'>about</Link></div>
      <div><Link >LOGIN/SIGNUP</Link></div>
    </nav>
    <Routes>
      <Route path='/about' element={<Header />} />
    </Routes>
    <main>
      <h1>jlhdsfhhahsldh</h1>
    </main>
{/* <Header /> */}
    </>
  )
  }
export default App;

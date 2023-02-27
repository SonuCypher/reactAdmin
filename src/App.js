import React, { useContext, useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import { NameContext, FirebaseContext } from "./context/AppContext";
import Signup from "./components/signUp/signup";
import Login from "./components/Login/login";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  // const [name, setName] = useState("Name");
  // const {Firebase}=useContext(FirebaseContext)
  const { name, setName } = useContext(NameContext);
  const [view,setView]= useState('')

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
        {view.map(obj=><h1>{obj}</h1>)}
        <button
          onClick={async () => {
            // const data=await db.collection('users').get().data()
            const data = await getDocs(collection(db, "users"));
            const snap =[] 
            data.forEach((doc) => {
              snap.push(doc.data().name)
              console.log(`${doc.id}=> ${doc.data().name} ${doc.data().role}`);
            });
            setView(snap);
            console.log(snap);
            console.log(view)

          }}
        >
          Click
        </button>
      </main>
      {/* <Header /> */}
    </>
  );
}
export default App;

import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const history= useNavigate()
  console.log(`${username} ${email} ${password}`)
  const signupHandler = () => {};
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          id="username"
          name="username"
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="email"
          name="email"
          value={email}
        />
        <label htmlFor="Passwd">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="Passwd"
          name="password"
          value={password}
        />
      </form>
      <button onClick={()=>history('/login')}>Login</button>
    </div>
  );
}

export default Signup;

import React from 'react'
import { useState } from "react";

function Login() {
    const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(`${username} ${email} ${password}`)
  const signupHandler = () => {};
  return (
    <div>
        <h3>this is login</h3>
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
    </div>
  );
}

export default Login

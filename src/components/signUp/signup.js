import React from 'react'

function Signup() {
    const signupHandler = ()=>{

    }
    return (
        <div>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="Passwd">Password</label>
                <input type="password" id="Passwd" name="password" />
            </form>
        </div>
    )
}

export default Signup

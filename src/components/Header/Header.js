import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NameContext } from '../../context/AppContext'

function Header() {
 const {name,setName}= useContext(NameContext)
 console.log(name)
  return (
    <div>
      <h1>Header{name}</h1>
      <Link to='/'>HOME</Link>
    </div>
  )
}

export default Header


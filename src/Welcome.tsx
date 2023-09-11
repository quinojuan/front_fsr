import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Welcome = () => {
  return (
    <div>
        <NavLink to={"/newinforme"}>Nuevo informe</NavLink>
        <br />
        <Link to={"/newpublicador"}>Nuevo publicador</Link>
        <br />
        <Link to={"/lista"}>Lista de publicadores</Link>
    </div>
  )
}

export default Welcome
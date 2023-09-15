import { Button } from '@chakra-ui/react'
import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Welcome = () => {
  return (
    <div>
        <NavLink to={"/newinforme"}><Button mb={3}>Nuevo informe</Button></NavLink>
        <br />
        <Link to={"/newpublicador"}><Button mb={3}>Nuevo publicador</Button></Link>
        <br />
        <Link to={"/lista"}><Button>Lista de publicadores</Button></Link>
    </div>
  )
}

export default Welcome
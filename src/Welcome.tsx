import { Button } from '@chakra-ui/react'
import {Link, NavLink} from "react-router-dom"
import "/node_modules/primeflex/primeflex.css";
// import TestComponent from "./TestComponent";
// import NewUser from './NewUser';



const Welcome = () => {
  return (
    <div className='flex justify-content-between w-4 m-auto mt-4'>
        <NavLink to={"/newinforme"}><Button mb={3}>Nuevo informe</Button></NavLink>
        <br />
        <Link to={"/newpublicador"}><Button mb={3}>Nuevo publicador</Button></Link>
        <br />
        <Link to={"/lista"}><Button>Lista de publicadores</Button></Link>
        {/* <TestComponent/>         */}
        {/* <NewUser/> */}
    </div>
  )
}

export default Welcome
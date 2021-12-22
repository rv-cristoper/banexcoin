import React from 'react'
import { NavLink } from 'react-router-dom'
import './scss/sidebar.scss'

interface Props {
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
    openMenu: boolean
}

const Sidebar = ({ setOpenMenu, openMenu }: Props): JSX.Element => {
    return (
        <ul className={`sidebar ${openMenu ? 'active' : ''}`} >
            <li className='closeSide' onClick={() => setOpenMenu(false)}>X</li>
            <li><NavLink to='/users' onClick={() => setOpenMenu(false)}>Usuarios</NavLink></li>
            <li><NavLink to='/clients' onClick={() => setOpenMenu(false)}>Clientes</NavLink></li>
        </ul >
    )
}

export default Sidebar

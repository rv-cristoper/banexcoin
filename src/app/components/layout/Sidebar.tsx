import React from 'react'
import { NavLink } from 'react-router-dom'
import './scss/sidebar.scss'

const Sidebar = (): JSX.Element => {
    return (
        <ul className='sidebar'>
            <li><NavLink to='/users'>Usuarios</NavLink></li>
            <li><NavLink to='/clients'>Clientes</NavLink></li>
        </ul>
    )
}

export default Sidebar

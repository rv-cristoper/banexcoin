import React from 'react'
import './scss/header.scss'

const Header = (): JSX.Element => {
    return (
        <header className='header'>
            <div className='containerMain'>
                <div className='logo'>
                   <img src="https://www.banexcoin.com/local/logos/logo-banexcoin-white-middleorange.svg" alt="imgBanex" />
                </div>
                <div className='navigate'>
                    Administrador
                </div>
            </div>
        </header>
    )
}

export default Header

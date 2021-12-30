import React from 'react'
import { useNavigate } from 'react-router-dom';
import './scss/header.scss'

interface Props {
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ setOpenMenu }: Props): JSX.Element => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className='containerMain'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg" className='menHumbr' alt="icon" width='30px' onClick={() => setOpenMenu(true)} />
                <div className='logo'>
                    <img src="https://res.cloudinary.com/cristoper/image/upload/v1640810666/banecoin/logo-banexcoin_rijfqg.svg" alt="imgBanex" />
                </div>
                <div className='navigate' onClick={() => navigate('/')}>
                    Cerrar sesión
                </div>
            </div>
        </header>
    )
}

export default Header

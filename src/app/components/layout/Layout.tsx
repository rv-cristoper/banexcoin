import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import './scss/layout.scss'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    return (
        <div className='layout'>
            <Header setOpenMenu={setOpenMenu} />
            <div className='constsidebar'>
                <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu}/>
                {children}
            </div>

        </div>
    )
}

export default Layout

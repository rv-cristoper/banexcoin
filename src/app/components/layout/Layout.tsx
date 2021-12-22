import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import './scss/layout.scss'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <div className='layout'>
            <Header />
            <div className='constsidebar'>
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default Layout

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import './scss/layout.scss'
import LoaderPage from '../../shared/loaderPage/LoaderPage'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const [loader, setLoader] = useState<boolean>(true)
    const [viewLoader, setviewLoader] = useState<boolean>(true)


    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
            setTimeout(() => {
                setviewLoader(false)
            }, 1200);
        }, 10000);
    }, [])

    return (
        <>
            {
                viewLoader &&
                <div className={`cntLoader ${!loader ? 'close' : ''}`}>
                    <LoaderPage />
                </div>
            }
            <div className='layout'>
                <Header setOpenMenu={setOpenMenu} />
                <div className='constsidebar'>
                    <Sidebar setOpenMenu={setOpenMenu} openMenu={openMenu} />
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout

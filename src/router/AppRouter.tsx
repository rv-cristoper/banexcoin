import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loggin from '../app/pages/Loggin'
import MainRouter from './MainRouter'


const AppRouter = (): JSX.Element => {

    return (
        <Router>
            <Routes>
                <Route path="" element={<Loggin />} />
                <Route path="/*" element={<MainRouter />} />
            </Routes>
        </Router>
    )
}

export default AppRouter

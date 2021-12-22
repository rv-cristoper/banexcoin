import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../app/pages/Dashboard'
import Loggin from '../app/pages/Loggin'

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Loggin />} />
                <Route path="a" element={<Dashboard />} />
                <Route path='*' element={<Navigate to="" />} />
            </Routes>
        </Router>
    )
}

export default AppRouter

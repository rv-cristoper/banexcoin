import React, { useEffect }from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom';
import Dashboard from '../app/pages/Dashboard'
import Loggin from '../app/pages/Loggin'
import Layout from '../app/components/layout/Layout'

const MainRouter = (): JSX.Element => {

    const navigate = useNavigate();

    useEffect(() => {
        const log: boolean = true
        if (!log) return navigate('/')
    }, [])

    return (
        <Layout>
            <Routes>
                <Route path="users" element={<Dashboard />} />
                <Route path="clients" element={<Loggin />} />
                <Route path='*' element={<Navigate to="users" />} />
            </Routes>
        </Layout>
    )
}

export default MainRouter
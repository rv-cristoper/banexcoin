import React, { useEffect }from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom';
import Layout from '../app/components/layout/Layout'
import UserPage from '../app/pages/UserPage';
import CommingSoon from '../app/components/notices/CommingSoon';

const MainRouter = (): JSX.Element => {

    const navigate = useNavigate();

    useEffect(() => {
        const log: boolean = true
        if (!log) return navigate('/')
    }, [])

    return (
        <Layout>
            <Routes>
                <Route path="users" element={<UserPage />} />
                <Route path="clients" element={<CommingSoon />} />
                <Route path='*' element={<Navigate to="users" />} />
            </Routes>
        </Layout>
    )
}

export default MainRouter
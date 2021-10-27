import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './App'
import HomeAdmin from './Component/Functional/HomeAdmin'
import HomeMahasiswa from './Component/Functional/HomeMahasiswa'


function Home() {
    const { state, dispatch } = useContext(AuthContext)
    if (!state.isAuthenticated) {
        return <Redirect to="/" />
    }

    if (state.role === 3) {
        return <Redirect to="/test" />
    }

    return (
        <HomeAdmin />
    )
}

export default Home

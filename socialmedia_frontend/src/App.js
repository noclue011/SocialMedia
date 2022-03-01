import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';

const App = () => {
    return (
        <Routes>
            {/* URL Routes for different web pages */}
            <Route path="login" element={<Login />}/>
            <Route path="/*" element={<Home />}/>
        </Routes>
    )
}

export default App
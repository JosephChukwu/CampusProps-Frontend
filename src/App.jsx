import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/about'
import SignUp from './pages/signUp'
import Profile from './pages/profile'

export default function App() {
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
}

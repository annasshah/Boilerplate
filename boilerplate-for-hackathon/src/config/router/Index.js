import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavbarComponent from '../../components/NavbarComponent'

import { Home, About, Contact, LoginPage, ErrorPage, ProductDetails, MyAccount,Products,CreateAccount} from './AppRouter'

export default function AppRouter() {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/productdetails' element={<ProductDetails />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/signup' element={<CreateAccount />} />
                <Route path='/my-account/*' element={<MyAccount />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

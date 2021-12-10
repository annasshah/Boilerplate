import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavbarComponent from '../../components/NavbarComponent'
import { setloadingPage } from '../redux/action/Index'

import { Home, About, Contact, LoginPage, ErrorPage, ProductDetails, MyAccount, Products, CreateAccount } from './AppRouter'

export default function AppRouter(props) {
    const { authState, apiData } = props
    
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(authState)
        // dispatch(apiData)
    }, [])


    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/products' element={<Products />} />
                <Route path='/signup' element={<CreateAccount />} />
                <Route path='/my-account/*' element={<MyAccount />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            {/* // <Footer /> */}
        </Router>
    )
}

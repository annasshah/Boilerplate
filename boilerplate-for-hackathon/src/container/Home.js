import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Spinner from '../assets/Spinner'
import { Grid, Box } from '@mui/material'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getData,changeUserAuth } from '../config/redux/action/Index'
import { useDispatch } from 'react-redux'

export default function Home() {


    const dispatch = useDispatch()
    const state = useSelector((a) => a)

    const [apiData, setApiData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // changeUserAuth(dispatch,true)

        getData(dispatch)
        if (Array.isArray(state.productsReducer.products) && state.productsReducer.products.length > 0) {
            setApiData(state.productsReducer.products)
            setLoading(false)  
        }

    }, [])

    return (
        <Box>
            <Container style={{ marginTop: '25px' }}>
                {apiData ? <Grid justifyContent='center' container spacing={2} >
                    {apiData.map((e, i) => {
                        return <ProductCard key={i} data={e} />
                    })}

                </Grid> : <Spinner />}
            </Container>
        </Box>
    )
}

{/* <h1 style={{ textAlign: 'center' }}>Home Page</h1> */ }
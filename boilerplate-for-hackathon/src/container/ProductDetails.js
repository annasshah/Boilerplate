import { Container, Grid, Stack, Typography, Button, Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Spinner from '../assets/Spinner'

export default function ProductDetails() {

    const location = useLocation()

    const [productData, setProductData] = useState()
    const [loading, setloading] = useState(true)


    let addToCart = () => {
        console.log(productData);
    }


    useEffect(() => {
        setProductData(location.state)
        setloading(false)

    }, [])
    return (
        <Container>
            {loading ? <Spinner /> :
                <Grid container sx={{ my: 3 }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack sx={{ width: '350px', minWidth: '250px', margin: '0 auto' }}><img src={productData.image} /></Stack>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack direction='column' spacing={2}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{productData.title}</Typography>
                            <Typography variant='h6'>{productData.description}</Typography>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>${productData.price}</Typography>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Rating name="read-only" value={productData.rating.rate} readOnly />
                                <Typography variant='body1'>({productData.rating.count})</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <Button variant='contained' size='large' onClick={addToCart}>Add To Cart</Button>
                                <Button variant='contained' size='large'>Buy Now</Button>
                            </Stack>

                        </Stack>
                    </Grid>
                </Grid>}
        </Container>
    )
}

// {loading? <Spinner/>: <h1>{productData.title}</h1> }





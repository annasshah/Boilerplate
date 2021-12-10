import { Container, Grid, Stack, Typography, Button, Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import Spinner from '../assets/Spinner'

export default function ProductDetails() {
    const { productId } = useParams()
    // console.log(productId);
    const productsState = useSelector(state => state.productsReducer.products)
    // const loading = useSelector(state => state.productsReducer.isLoading)
    // console.log(productsState[0].id);

    const [renderProduct, setRenderProduct] = useState(productsState.filter(x => x.id == productId)[0])


    // const location = useLocation()

    // const [productData, setProductData] = useState()
    // const [loading, setloading] = useState(true)


    let addToCart = () => {
        // console.log(productData);
    }


    useEffect(() => {

        // let fil = /

            // setRenderProduct(productsState.filter(x => x.id == productId));
            // console.log(renderProduct)

        

        


    }, [])
    return (
        <Container>
            {/* {loading ? <Spinner /> : */}
                <Grid container sx={{ my: 3 }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack sx={{ width: '350px', minWidth: '250px', margin: '0 auto' }}><img src={renderProduct.image} /></Stack>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack direction='column' spacing={2}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{renderProduct.title}</Typography>
                            <Typography variant='h6'>{renderProduct.description}</Typography>
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>${renderProduct.price}</Typography>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Rating name="read-only" value={renderProduct.rating.rate} readOnly />
                                <Typography variant='body1'>({renderProduct.rating.count})</Typography>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <Button variant='contained' size='large' onClick={addToCart}>Add To Cart</Button>
                                <Button variant='contained' size='large'>Buy Now</Button>
                            </Stack>

                        </Stack>
                    </Grid>
                </Grid>
                {/* } */}
        </Container>
    )
}

// {loading? <Spinner/>: <h1>{renderProduct.title}</h1> }





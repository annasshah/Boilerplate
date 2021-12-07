import { Stack, ButtonGroup, Box, Button, Typography, Container } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyCart, Profile, Orders } from '../../config/router/AppRouter'
import { useNavigate } from 'react-router-dom'

export default function MyAccount() {
    const navigate = useNavigate()
    return (
        <div>
            <Typography variant='h4' sx={{ my: 3 }} align='center'>My Account</Typography>


            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >

                    <ButtonGroup color="primary" aria-label="medium primary button group">
                        <Button onClick={() => navigate('/my-account')}>Profile</Button>
                        <Button onClick={() => navigate('/my-account/my-cart')}>Cart</Button>
                        <Button onClick={() => navigate('/my-account/orders')}>Orders</Button>
                    </ButtonGroup>
                </Box>


                <Routes >
                    <Route path='' element={<Profile />} />
                    <Route path='my-cart' element={<MyCart />} />
                    <Route path='orders' element={<Orders />} />
                </Routes >
            </Container>

        </div>
    )
}

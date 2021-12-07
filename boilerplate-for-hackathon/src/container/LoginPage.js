import React, { useEffect } from 'react'
import { Paper, Stack, Typography, TextField, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router'
import {auth, signInWithEmailAndPassword, onAuthStateChanged,
} from '../config/firebaseconfig/Index'
import { FcGoogle } from 'react-icons/fc';



export default function LoginPage() {

    const navigate = useNavigate()

    let login = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        let obj = {
            email,
            password
        }

        console.log(obj);

        signInWithEmailAndPassword(auth, email, password)
            .then((success) => {
                // Signed in 
                console.log('User successfully login', success);
                // ...
            })
            .catch((error) => {
                console.log('User not login', error);
            });
        e.target.reset()
    }



    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         navigate('/')
    //     }
    // });


    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             navigate('/')
    //         }
    //     })

    // }, [])





    return (
        <Stack justifyContent='center' alignItems='center' direction='column' sx={{ width: '100%', height: '90vh' }}>

            <Paper square elevation={0} sx={{ py: 4, px: 1, border: '1px solid #d3d3d3' }} children={
                <Stack alignItems='center' spacing={2} direction='column'
                    component="form"
                    sx={{
                        '& > :not(style)': { width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"

                    onSubmit={login}
                >
                    <Typography align='center'
                        sx={{ fontWeight: 'bold' }}
                        variant='h5'>
                        LOG IN
                    </Typography>
                    <TextField
                        // id="outlined-basic"
                        type='email' name='email' label="Email" variant="outlined" />
                    <TextField
                        // id="outlined-basic"
                        type='password' name='password' label="Password" variant="outlined" />
                    <Button type='submit'
                        fullWidth size='large' variant="contained">Login</Button>


                    <Stack spacing={1} direction='row' justifyContent='center' alignItems='center'>
                        <Typography>Don't have account </Typography>
                        <Typography color='primary' sx={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/signup')}>sign up now</Typography>

                    </Stack>


                    <Stack spacing={1} direction='row' justifyContent='center' alignItems='center' >
                        <Button variant='contained' fullWidth >Google signup</Button>
                        <Button variant='contained' fullWidth >Facebook signup</Button>

                    </Stack>

                    <Stack spacing={1} direction='row' justifyContent='center' alignItems='center' >
                        {/* <LoadingButton
                            // onClick={handleClick}
                            startIcon={<FcGoogle />}
                            // loading={loading}
                            loadingPosition="end"
                            variant="contained"
                        >
                            Signup
                        </LoadingButton> */}
                        

                    </Stack>
                </Stack>
            } />



        </Stack>
    )
}
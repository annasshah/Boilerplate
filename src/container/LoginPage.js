import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Stack, Typography, TextField, Button, Avatar, } from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../config/firebaseconfig/Index";
// import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [err, setErr] = useState();

  let login = (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      setErr("Please fill the fields first!");
    }
    else {
      console.log(userDetails);
      signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((success) => {
          // Signed in
          console.log("User successfully login", success);
          navigate('/')
          // ...
        })
        .catch((error) => {
          console.log("User not login", error);
        });
      e.target.reset();
    }
  };


  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              navigate('/')
          }
      })

  }, [])

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "90vh" }}
    >
      <Paper
        square={false}
        elevation={0}
        sx={{
          py: "35px",
          px: 3,
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
        }}
        children={
          <Stack
            alignItems="center"
            spacing={4}
            direction="column"
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => login(e)}
          >
            <Stack>
              <Typography
                align="center"
                sx={{ fontWeight: "bold" }}
                variant="h4"
              >
                Login
              </Typography>
            </Stack>

            {err && <Stack>
              <Typography align='center' variant='body2' sx={{ color: 'red' }}>{err}</Typography></Stack>
            }

            <Stack spacing={2}>
              <TextField
                // id="outlined-basic"
                type="email"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                label="Email"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="password"
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                label="Password"
                variant="outlined"
              />

              <Typography align="right" variant="body2">
                <Link to='/signup'>Forgot Password</Link>
              </Typography>
              <Button type="submit" fullWidth size="large" variant="contained">
                Login
              </Button>
            </Stack>

            <Stack
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Stack>
                <Typography variant="body2">or login with</Typography>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="center" spacing={2}>
              <Avatar sx={{ bgcolor: "#343437" }}>A</Avatar>
              <Avatar sx={{ bgcolor: "#343437" }}>B</Avatar>
              <Avatar sx={{ bgcolor: "#343437" }}>C</Avatar>
            </Stack>

            <Stack>
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "#cccccc" }}
              >
                or
              </Typography>
              <Typography align="center" sx={{ color: "#343437" }}>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#343437",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Stack>
          </Stack>
        }
      />
    </Stack>
  );
}

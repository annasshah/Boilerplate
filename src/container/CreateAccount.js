import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router";
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  database,
  set,
  ref,
} from "../config/firebaseconfig/Index";
// import { FcGoogle } from 'react-icons/fc';

export default function CreateAccount() {
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [cnic, setCnic] = useState();

  let signup = (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !phoneNumber || !country || !cnic) {
      setErr("Please fill the fields first!");
    } else {
      let obj = {
        userName,
        email,
        password,
        phoneNumber,
        country,
        cnic,
      };

      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((success) => {
          // Signed in
          let userUid = success.user.uid;
          set(ref(database, "users/" + userUid), obj);
        })
        .catch((error) => {
          setErr(error.message);
        });
      e.target.reset();
    }
  };


  // useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //             navigate('/')
  //         }
  //     })

  // }, [])

  return (
    <Stack 
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Paper
        square={false}
        elevation={0}
        sx={{
          py: "25px",
          px: 3,
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
        }}
        children={
          <Stack
            alignItems="center"
            spacing={2}
            direction="column"
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => signup(e)}
          >
            <Stack>
              <Typography
                align="center"
                sx={{ fontWeight: "bold" }}
                variant="h4"
              >
                Signup
              </Typography>
            </Stack>

            {err && (
              <Stack>
                <Typography
                  align="center"
                  variant="body2"
                  sx={{ color: "red" }}
                >
                  {err}
                </Typography>
              </Stack>
            )}

            <Stack spacing={2}>
              <TextField
                // id="outlined-basic"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                label="Username"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                label="Phone Numer"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="number"
                onChange={(e) => setCnic(e.target.value)}
                label="CNIC number"
                variant="outlined"
              />
              <TextField
                // id="outlined-basic"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                label="country"
                variant="outlined"
              />

              <Button type="submit" fullWidth size="large" variant="contained">
                Signup
              </Button>
            </Stack>

            <Stack>
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "#cccccc" }}
              >
                Already Have Account
              </Typography>
              <Typography align="center" sx={{ color: "#343437" }}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#343437",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Stack>
          </Stack>
        }
      />
    </Stack>
  );
}

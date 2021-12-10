import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../assets/Spinner";
import { Grid, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getData, changeUserAuth } from "../config/redux/action/Index";
import { useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "../config/firebaseconfig/Index";
import { useNavigate } from "react-router";

export default function Products() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productState = useSelector((a) => a.productsReducer.products)
    const loading = useSelector((a) => a.productsReducer.isLoading)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                changeUserAuth(dispatch, false);
                navigate("/login");
            }
        })
    }, [])

    return (
        <Box>
            <Container style={{ marginTop: "25px" }}>

                {loading ? <Spinner /> : <Grid justifyContent="center" container spacing={3}>
                    {productState.map((e, i) => {
                        return <ProductCard key={i} data={e} />;
                    })}
                </Grid>}
            </Container>
        </Box>
    )
}

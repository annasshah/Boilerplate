import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../assets/Spinner";
import { Grid, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { changeUserAuth } from "../config/redux/action/Index";
import { useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "../config/firebaseconfig/Index";
import { useNavigate } from "react-router";
import { getData } from "../config/redux/action/Index";



export default function Home() {
  const dispatch = useDispatch();
  const productState = useSelector((a) => a.productsReducer.products)
  const loading = useSelector((a) => a.productsReducer.isLoading)

  const navigate = useNavigate()

  
  // console.log(loadingState);

  // const [apiData, setApiData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   // changeUserAuth(dispatch, true)
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       changeUserAuth(dispatch, true);
  //     } else {
  //       changeUserAuth(dispatch, false);
  //       navigate("/login");
  //     }
  //   })

  //   getData(dispatch)

  // }, []);



  return (
    <Box>
      {/* <Container style={{ marginTop: "25px" }}>

        {loading ? <Spinner /> : <Grid justifyContent="center" container spacing={3}>
          {productState.map((e, i) => {
            return <ProductCard key={i} data={e} />;
          })}
        </Grid>}
      </Container> */}
    </Box>
  );
}

{
  /* <h1 style={{ textAlign: 'center' }}>Home Page</h1> */
}

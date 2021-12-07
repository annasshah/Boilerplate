import axios from "axios";

function getData(dispatch) {
    const apiHandle = axios.create({
        baseURL: "https://fakestoreapi.com/products",
    });

    apiHandle.get()
        .then((e) => {
            let data = e.data
            dispatch({
                type: "PRODUCTS",
                products: data,
            })
        })

}



function changeUserAuth(dispatch,userAuthStatus) {
    dispatch({
        type: "USERAUTH",
        userAuth: userAuthStatus,
    })

}








export { getData,changeUserAuth }
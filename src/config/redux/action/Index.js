import axios from "axios";

async function getData() {
    const apiHandle = axios.create({
        baseURL: "https://fakestoreapi.com/products",
    })
    await apiHandle.get()
        .then((e) => {
            let data = e.data
            return {
                type: "PRODUCTS",
                products: data,
                isLoading: false
            }
        })

}



function changeUserAuth(userAuthStatus) {
    return {
        type: "USERAUTH",
        userAuth: userAuthStatus,
        isLoading: false
    }

}






export { getData, changeUserAuth }
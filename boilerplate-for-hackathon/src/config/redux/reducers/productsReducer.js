const INITIAL_STATE = {
    type:"PRODUCTS",
    products:[]



}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "PRODUCTS") {
        return {...state,...action};
    }
    return state;
};



export default reducer
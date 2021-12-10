const INITIAL_STATE = {
    type:"USERAUTH",
    userAuth:false,
    uid:'',
    isLoading:true


}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "USERAUTH") {
        // state.data = action.data;
        return {...state,...action};
    }
    return state;
};



export default reducer
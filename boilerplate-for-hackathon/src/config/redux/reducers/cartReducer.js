const INITIAL_STATE = {

}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "USERCART") {
        // state.data = action.data;
        return {...state, ...action};
    }
    return state;
};



export default reducer
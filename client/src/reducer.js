
const initialState = {
    user:null,
    isAuthenticated:null
}
const reducer = (state, action) => {
    switch(action.type){
        case "login":
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user:action.payload,
                isAuthenticated:true
            }
        default:
            return {...state}
    }
}
module.exports = {
    initialState,
    reducer
}

const initialState = {
    user:null,
    isAuthenticated:null,
    message:""
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
        case "loginError":
            console.log(action.payload)
            return {
                ...state,
                errorMessage:action.payload.message
            }
        case "register":
            return {
                ...state,
                message:"Sucessfully signed up. Please Login now!"
            }
        case "registerError":
            return {
                ...state,
                errorMessage:action.payload.message
            }

        default:
            console.log("state",state)
            return {...state}
    }
}
module.exports = {
    initialState,
    reducer
}
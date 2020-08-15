import React,{useContext,useState} from 'react'
import {GlobalContext} from '../../contexts/context'
import axios from 'axios'
const Login = () => {
    
    const {state,dispatch} = useContext(GlobalContext)
    console.log(state,"state in login")

    const LoginRequest = () => {

        axios.post(`${state.baseUrl}/userRouter/login`)
        .then(data => {
            dispatch({type:"login",payload:data})
        }).catch(err => {
            dispatch({type:"loginError",payload:err})
        })
    }
    return (
        <div>
        <button onClick={LoginRequest}>Login</button>
        </div>
    )
}

export default Login 
import React,{useContext,useState} from 'react'
import {GlobalContext} from '../../contexts/context'
import axios from 'axios'
const Login = () => {
    const {state,dispatch} = useContext(GlobalContext)


    const LoginRequest = () => {
        axios.post(``)
    }
    return (
        <div>

        </div>
    )
}

export default Login 
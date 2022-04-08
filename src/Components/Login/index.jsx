import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios"

const Login = () =>{
    

    return(
        <div className="bodyModal h-[100vh] w-[100vw] flex justify-center items-center bg-gradient-to-r from-indigo-500 to-indigo-700">
            <div className="ModalLogin flex bg-white p-3 rounded-lg h-[550px] flex">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;
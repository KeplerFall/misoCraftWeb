import axios from "axios";
import Router from "next/router"
import React, { useState } from 'react';

const LoginForm = ()=>{
        const [count, setCount] = useState(0)
        function authUser(){
            const loading = document.querySelector('.loading')
            let username = document.querySelector('.usernameLogin').value
            let password = document.querySelector('.passwordLogin').value
            loading.classList.remove("hidden")
            
            axios.post('/api/authUser', {username: username, password: password}).then((response)=>{
                
                
                if(response.data.message == true){
                    setCount(username)
                    Router.push("/dashboard")
                }else{
                    loading.classList.add("hidden")
                }
            })
        }

        return(
            <div className="loginForm flex flex-col h-[400px] place-content-around text-center">
                <p className="flex justify-center"><img src="https://i.imgur.com/6Tv9Wee.png" alt="" className="max-h-[80px] max-w-[80px] rounded-full"/></p>
                <p className="text-6xl font-bold font-mono underline decoration-blue-400 text-gray-800"> Log In </p>
                <input type="text" className="usernameLogin text-2xl outline-0 border-b-2 border-gray-400 pl-3" placeholder="Nome de Usuário" />
                <input type="password" className="passwordLogin text-2xl outline-0 border-b-2 border-gray-400 pl-3" placeholder="Senha"/>
                <div className="text-3xl bg-blue-400 text-gray-100 font-bold rounded-lg cursor-pointer" onClick={authUser}>Entrar</div>
                <div className="loading hidden">Carregando...</div>
            </div>
        )
}

export default LoginForm;
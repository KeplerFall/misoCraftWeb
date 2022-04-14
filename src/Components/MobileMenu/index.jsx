import React from "react";
import { useState } from "react";
import logoAccount from "../../Images/guest-male--v1.png"

const MobileMenu = () =>{

    function openMenu(){
        const menuMobile = document.querySelector(".MobileMenu")
        menuMobile.classList.add("left-[0vw]")
        menuMobile.classList.remove("left-[-100vw]")
    }

    function closeMenu(){
        const menuMobile = document.querySelector(".MobileMenu")
        menuMobile.classList.remove("left-[0vw]")
        menuMobile.classList.add("left-[-100vw]")
    }

    return(
        <div className="lg:hidden">
            <div onClick={openMenu}>
                <div className="line w-[40px] h-[10px] bg-red-700 rounded-full my-1 "></div>
                <div className="line w-[40px] h-[10px] bg-red-700 rounded-full my-1"></div>
                <div className="line w-[40px] h-[10px] bg-red-700 rounded-full my-1"></div>
            </div>  

            
            <div className="MobileMenu bg-gray-200 w-[100vw] h-[100vh] fixed top-0 left-[-100vw] transition delay-150 rounded-lg">
                <div className="MenuHeader flex flex-row place-content-between bg-gray-700 text-white">
                    <div className="MenuTitle text-3xl">Menu</div>
                    <div className="CloseMenu text-3xl px-3 font-bold" onClick={closeMenu}> X </div>
                </div>
                <div className="MenuItems">
                    <div className=""><img src="https://i.imgur.com/T4rJ69p.png" className="w-[60px] h-[60px] text-center"/> Perfil</div>
                    <div className="">Mercado</div>
                    <div className="">Segurança</div>
                </div>
                
                <div className="fixed bottom-0 bg-red-700 py-2 mt-2 font-bold text-white w-[60vw] text-center">Sair</div>
            </div>
        </div>
        
    )
}

export default MobileMenu;
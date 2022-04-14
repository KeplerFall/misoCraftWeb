import axios from "axios";
import React, { useEffect } from "react";

const Market = () =>{

    useEffect(()=>{
        axios.get('/api/getMarketList').then((response)=>{
            console.log(response)
        })
    },[])

    return(
        <div className="">
        </div>
    )
}

export default Market;
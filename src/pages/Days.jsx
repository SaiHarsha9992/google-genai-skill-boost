import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./Data";
import {getMail} from "./mail";
import axios from "axios";
import './Days.css'

function Days(){
    const mail=getMail;
    const data=Data;
    const {days}=useParams();
    const [stored,setstored]=useState({});
    const navigator=useNavigate();
    function Nav(index)
    {
        navigator(`/lab/${days}/${index}`);
    }
    function Getting()
    {
        axios.get(`http://localhost:9000/getting/?username:${mail}`)
        .then((res)=>{
            setstored(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function ModifyandGetting(event)
    {
        if(event.target.value=="incompleted")
        {
            axios.get(`http://localhost:9000/modifing/?username:${mail}&value:${event.target.value}`)
            .then((res)=>{
                setstored(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    Getting();
    const a=data[days];
    const images=['https://gdg-genai.vercel.app/img/lab1.jpg','https://gdg-genai.vercel.app/img/lab2.png','https://gdg-genai.vercel.app/img/lab3.png','https://gdg-genai.vercel.app/img/lab3.png']
    return(
        <>
        {
          <div className="Days_container">
            <h1>Day : {days+1}</h1>
            {
               a.map((values,index)=>{
                return(
                    <>
                    <div className="Days">
                        <img src={images[index]} onClick={()=>Nav(index)}/>
                        <button name={days+'_'+index} onClick={(event)=>ModifyandGetting(event)}>{stored[days+'_'+index] ? "completed":"incompleted" }</button>
                    </div>
                    </>
                )
               })
            }
          </div>
        }
        </>
    )
}
export default Days;
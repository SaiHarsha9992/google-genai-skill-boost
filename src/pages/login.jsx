import {React,useState,useEffect }from "react";
import axios from "axios";
import './login.css'
import { useNavigate } from "react-router-dom";
import {setMail} from "./mail";
function Login()
{
    const [data,setdata]=useState({
        username:"",
        password:""
    })
    var val=false;
    const navigator=useNavigate()
    useEffect(
       ()=>{ if(val==true)
        {
            navigator('/home');
            setMail(data["username"]);
        }
    }
    ,[val])
    function Handling(event)
    {
        setdata((prev)=>{
            return{
                ...prev,[event.target.name]:event.target.value
            }
        })
        console.log(data)
    }
    function Logins()
    {
        console.log("i a");
        axios.post('http://localhost:9000/login/',data)
        .then((res)=>{
            val=res.data
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <div id="login_page">
            <div id="login_container">
                <h1>LOGIN...</h1>
                <div className="combine">
                <label>
                    USERNAME
                </label>
                <input type="text" name="username" onChange={(event)=>{Handling(event)}}/>
                </div>
                <div className="combine">
                <label>
                    PASSWORD
                </label>
                <input type="text" name="password" onChange={(event)=>{Handling(event)}}/>
                </div>
                <button onClick={()=>{Logins()}}>LOGIN</button>
            </div>
        </div>  
        </>
    )
}

export default Login;
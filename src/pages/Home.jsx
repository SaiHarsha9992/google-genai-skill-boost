import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
function Home()
{
    const navigator=useNavigate();
    function Nav(event)
    {
        navigator(`/day/${event.target.name}`);
    }
    return(
        <>
        <img className="head_img" src="https://gdg-genai.vercel.app/img/top.jpg"/>
        <h1></h1>
        <div className="parent">
            <div className="child" >
                <div id="classone">
                </div>
                <button name="0" onClick={(event)=>{Nav(event)}} >DAY 1</button>
            </div>
            <div className="child" >
                <div id="classtwo">
                </div>
                <button name="1" onClick={(event)=>{Nav(event)}}>DAY 2</button>
            </div>
            <div className="child" >
                <div id="classthree">
                </div>
                <button name="2" onClick={(event)=>{Nav(event)}}>DAY 3</button>
            </div>
            <div className="child" >
                <div id="classfour">
                </div>
                <button name="3" onClick={(event)=>{Nav(event)}}>DAY 4</button>
            </div>
            <div className="child" >
                <div id="classfive">
                </div>
                <button name="4" onClick={(event)=>{Nav(event)}}>DAY 5</button>
            </div>
            <div className="child" >
                <div id="classsix">
                </div>
                <button name="5" onClick={(event)=>{Nav(event)}}>DAY 6</button>
            </div>
            <div className="child" >
                <div id="classseven">
                </div>
                <button name="6" onClick={(event)=>{Nav(event)}}>DAY 7</button>
            </div>
            <div className="child" >
                <div id="classeight">
                </div>
                <button name="7" onClick={(event)=>{Nav(event)}}>DAY 8</button>
            </div>
            <div className="child" >
                <div id="classnine">
                </div>
                <button name="8" onClick={(event)=>{Nav(event)}}>DAY 9</button>
            </div>
            <div className="child" >
                <div id="classten">
                </div>
                <button name="9" onClick={(event)=>{Nav(event)}}>DAY 10</button>
            </div>
            <div className="child" >
                <div id="class11">
                </div>
                <button name="10" onClick={(event)=>{Nav(event)}}>DAY 11</button>
            </div>
            
            <div className="child" >
                <div id="class12">
                </div>
                <button name="11" onClick={(event)=>{Nav(event)}}>DAY 12</button>
            </div>

            <div className="child" >
                <div id="class13">
                </div>
                <button name="12" onClick={(event)=>{Nav(event)}}>DAY 13</button>
            </div>
            <div className="child" >
                <div id="class14">
                </div>
                <button name="13" onClick={(event)=>{Nav(event)}}>DAY 14</button>
            </div>
            <div className="child" >
                <div id="class15">
                </div>
                <button name="14" onClick={(event)=>{Nav(event)}}>DAY 15</button>
            </div>
            <div className="child" >
                <div id="class16">
                </div>
                <button name="15" onClick={(event)=>{Nav(event)}}>DAY 16</button>
            </div>
        </div>
        </>
    )
}
export default Home;
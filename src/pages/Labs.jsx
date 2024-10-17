import React from "react";
import './Labs.css';
import { useParams } from "react-router-dom";
import Data from "./Data";
function Labs()
{
    
    const {days,labs}=useParams();
    const data=Data;
    return(
        <>
            <div className="container">
                <h1>API Gateway: Quick Start</h1>
                <a className="lab-link" href={data[days][labs][0]} target="_blank">Access Lab 1</a>
                <iframe src={data[days][labs][1]} width="640" height="480" allow="autoplay"></iframe>
                <a className="download-button" href={data[days][labs][2]} download="">Download Lab Files</a>
            </div>
        </>
    )
}
export default Labs;
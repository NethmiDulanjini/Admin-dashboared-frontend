import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";

export default function DashboardHome()
{
    return(
        <>
        <div style={{display:'flex'}}>
           <div style={{maxWidth:'30%'}}> <Sidebar/></div>
           <div style={{maxWidth:'70%', marginLeft:'10%'}}> <Dashboard/> </div>
        </div>
        </>
    );
}
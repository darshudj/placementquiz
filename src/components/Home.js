import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Home.module.css"
import { useState } from 'react'


const Home = () => {
    const [start,setstart]=useState(true)
   
  return (
    <>
    {
    start?(
        <div className={style.main}>
    <h1>welcome to quiz</h1>
    <button style={{background:"black",color:"white",width:"4rem",borderRadius:"10px"}} onClick={()=>{setstart(false)}}>Start</button>
    </div>
    ):(<div className={style.main}>
        <h3>select topic to continue</h3>
        <NavLink to="/history" > <button className={style.button}>history</button></NavLink>
        <NavLink to="/geograpy" ><button className={style.button}>geograpy</button></NavLink>
        <NavLink to="/polity" ><button className={style.button}>polity</button></NavLink>
        </div>)
    }
    </>
  )
}

export default Home
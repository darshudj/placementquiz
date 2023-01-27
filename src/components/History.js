import React from 'react'
import style from "./Normal.module.css"
import { useState } from "react"
import { NavLink } from 'react-router-dom'

export const History = () => {
    const questions=[
        { question:"The University of Nalanda was set up by which Gupta ruler",
          answers:[
            {answer:"[A] Kumargupta I",iscorrect:true},
            {answer:"[B] Chandragupta II",iscorrect:false},
            {answer:"[C] Samudragupta",iscorrect:false},
            {answer:"[D] Kumargupta II",iscorrect:false},
          ]
        },
        { question:"In the Maurya empire, who was the superintendent of Ports ",
          answers:[
            {answer:"[A] Pattanadhyaksha",iscorrect:true},
            {answer:"[B] Manadhyaksha",iscorrect:false},
            {answer:"[C] Kosadhyaksha",iscorrect:false},
            {answer:"[D] Ganikadhyaksha",iscorrect:false},
          ]
        },
        { question:"Which of the following was main capital of Kushana king Kanishka-I",
          answers:[
            {answer:"[A] Purushapura",iscorrect:true},
            {answer:"[B] Pataliputra",iscorrect:false},
            {answer:"[C] Taxila ",iscorrect:false},
            {answer:"[D] Mathura",iscorrect:false},
          ]
        },
        { question:"In the Indus Valley civilization the Great Granary was found in which among the following sites",
          answers:[
            {answer:"[A] Lothal",iscorrect:false},
            {answer:"[B] Harappa",iscorrect:false},
            {answer:"[C] Surkotada",iscorrect:false},
            {answer:"[D] Mohenjodaro",iscorrect:true},
          ]
        },
        { question:"The term “Vitasta” in Rig Veda refers to which among the following rivers",
          answers:[
            {answer:"[A] Indus",iscorrect:false},
            {answer:"[B] Beas",iscorrect:false},
            {answer:"[C] Jhelum",iscorrect:true},
            {answer:"[D] Chenab",iscorrect:false},
          ]
        }
    ]
    const [scoreopen,setscoreopen]=useState(false)
    const [score,setscore]=useState(0)
    const [current,setcurrent]=useState(0)
    function nextQuestion(iscorrect){
        const next=current+1
      if (next <questions.length){
        setcurrent(next)
        
    } else{
        setscoreopen(true)
    }
      if(iscorrect===true){
        setscore(score+2)
      }
    
    }
  return (
    <>
    {
        scoreopen ? (<div className={style.main}><h2>your Score {score} out of 10 </h2>
        <NavLink to="/" > <button className={style.homee}>Home</button></NavLink>
        </div>) :
        (
            <div className={style.main}>
     <div className={style.left}>
     <span><h3>Question{current+1}/{questions.length}</h3></span>
     <h4>{current+1} ) {questions[current].question}</h4>
     </div>
     <div className={style.right}>
        {questions[current].answers.map((option)=>{
           return <button onClick={()=>{nextQuestion(option.iscorrect)}}>{option.answer}</button>
        })}
     </div>
    </div>
        )
    }
    </>
  )
}

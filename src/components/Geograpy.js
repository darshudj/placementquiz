import React from 'react'
import { useState } from 'react'
import style from './Normal.module.css'
import { NavLink } from 'react-router-dom'

 const Geograpy = () => {
    const questions=[
        { question:"Which type of forests occupies the highest percentage of area in India",
          answers:[
            {answer:"[A] Tropical deciduous",iscorrect:true},
            {answer:"[B] Savanna and desert vegetation",iscorrect:false},
            {answer:"[C] Equatorial evergreen",iscorrect:false},
            {answer:"[D] Tropical Rainforests",iscorrect:false},
          ]
        },
        { question:"The northernmost point of India is known as: ",
          answers:[
            {answer:"[A] Indira Heights",iscorrect:false},
            {answer:"[B] Indira Col",iscorrect:true},
            {answer:"[C] Indira Point",iscorrect:false},
            {answer:"[D] None of the above",iscorrect:false},
          ]
        },
        { question:"Which among the following states is largest producer of Coffee in India",
          answers:[
            {answer:"[A] Tamilnadu",iscorrect:false},
            {answer:"[B] Andhra Pradesh",iscorrect:false},
            {answer:"[C] Karnataka ",iscorrect:true},
            {answer:"[D] Kerala",iscorrect:false},
          ]
        },
        { question:"In which state is located the Jongsong Peak",
          answers:[
            {answer:"[A] Sikkim",iscorrect:true},
            {answer:"[B] West Bengal",iscorrect:false},
            {answer:"[C] Manipur",iscorrect:false},
            {answer:"[D] Nagaland",iscorrect:false},
          ]
        },
        { question:"The Chamera Dam is located in which state/UT",
          answers:[
            {answer:"[A] Puducherry",iscorrect:false},
            {answer:"[B] Uttar Pradesh",iscorrect:false},
            {answer:"[C] Himachal Pradesh",iscorrect:true},
            {answer:"[D] Jharkhand",iscorrect:false},
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
export default Geograpy


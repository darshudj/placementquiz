import React from 'react'
import { useState } from 'react'
import style from './Normal.module.css'
import { NavLink } from 'react-router-dom'


const Polity = () => {
    const questions=[
        { question:"In which year, parliament passed the Citizenship Act",
          answers:[
            {answer:"[A] 1950",iscorrect:false},
            {answer:"[B] 1955",iscorrect:true},
            {answer:"[C] 1960",iscorrect:false},
            {answer:"[D] 1965",iscorrect:false},
          ]
        },
        { question:"How many members of Rajya Sabha are nominated by President of India ",
          answers:[
            {answer:"[A] 2",iscorrect:false},
            {answer:"[B] 10",iscorrect:false},
            {answer:"[C] 12",iscorrect:true},
            {answer:"[D] 15",iscorrect:false},
          ]
        },
        { question:"Dr. BR Ambedkar was elected to constituent assembly of undivided India from which among the following",
          answers:[
            {answer:"[A] West Bengal",iscorrect:true},
            {answer:"[B] United provinces",iscorrect:false},
            {answer:"[C] The Bombay Presidency",iscorrect:false},
            {answer:"[D] Punjab",iscorrect:false},
          ]
        },
        { question:"Who was the chairman of the drafting committee of the Constituent Assembly",
          answers:[
            {answer:"[A] G. V. Mavalankar",iscorrect:false},
            {answer:"[B] Dr. Rajendra Prasad",iscorrect:false},
            {answer:"[C] Dr. K. M. Munshi",iscorrect:false},
            {answer:"[D] Dr. B. R. Ambedkar",iscorrect:true},
          ]
        },
        { question:"Which Articles of the Indian Constitution deal with the Union executive",
          answers:[
            {answer:"[A] Articles 42 to 68",iscorrect:false},
            {answer:"[B] Articles 48 to 60",iscorrect:false},
            {answer:"[C] Articles 52 to 78",iscorrect:true},
            {answer:"[D] Articles 82 to 98",iscorrect:false},
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

export default Polity
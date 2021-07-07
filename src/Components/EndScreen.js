import React,{useContext}from 'react'
import { QuizContext } from '../Context/Context'
import { Questions } from '../Context/QuestionBank'
import '../App.css'
const EndScreen = () => {
    const {setGame}=useContext(QuizContext)
    
    const score=()=>{
        let m=0
        Questions.map((p)=>{
            if (p.sel==1){
                m+=1
            }
        })
        return m
    }
    

    const restart=()=>{
        setGame('menu')
        Questions.map((p)=>{
            p.option.map((x)=>x.color='white')
        })
     
    }
    return (
        <div class='end'>
            <h1>Your Score : {score()}/{Questions.length}</h1>
            <button onClick={()=>restart()}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen

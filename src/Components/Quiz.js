import React , {useState,useContext} from 'react'
import { Questions  } from '../Context/QuestionBank'
import { QuizContext } from '../Context/Context'
import {next1} from '../Context/Functions'

const Quiz = () => {
    const [curr,setCurr]=useState(0)
    const [choice,setChoice]=useState("")
    const {setGame}=useContext(QuizContext)
    const l=Questions[curr].option

    const next=()=>{
        next1(curr,choice)
        setCurr(curr+1)
    }
  
    const prev=()=>{
        setCurr(curr-1)
    }
    
    const finish=()=>{
        setGame('end')
        next1(curr,choice);
    }

    const choiceCol=(ans,i)=>{
        setChoice(ans)
        if(i.color=='white'){
           i.color='rgba(40,56,43,0.5)'
        }
        else{
           i.color='white'
        }
        l.map((p)=>{if(p!=i){
            p.color='white'
        }})
      
    }
    
    return (
        <div className='quiz'>
            <h1>{Questions[curr].prompt}</h1>
            <div className="option">
            <button onClick={()=>choiceCol('A',Questions[curr].option[0])} style={{backgroundColor:Questions[curr].option[0].color}}>{Questions[curr].option[0].op}</button>

            <button onClick={()=>choiceCol('B',Questions[curr].option[1])} style={{backgroundColor:Questions[curr].option[1].color}}>{Questions[curr].option[1].op}</button>

            <button onClick={()=>choiceCol('C',Questions[curr].option[2])} style={{backgroundColor:Questions[curr].option[2].color}}>{Questions[curr].option[2].op}</button>

            <button onClick={()=>choiceCol('D',Questions[curr].option[3])} style={{backgroundColor:Questions[curr].option[3].color}}>{Questions[curr].option[3].op}</button>     
            </div>
            <div class='ne-prev'>
            {curr!=0?<button onClick={()=>prev()}>Previous </button>:null}
            {curr==Questions.length-1?<button onClick={()=>finish()}>Finish </button>: <button onClick={()=>next()}>Next </button>}
            </div>
            <div className="no">
                <h1>{curr+1}/{Questions.length}</h1>
            </div>
        </div>
    )
}

export default Quiz

import React,{useContext} from 'react'
import { QuizContext } from '../Context/Context'
import '../App.css'
const MainMenu = () => {
    const {setGame}=useContext(QuizContext)

    return (
        <div className='Menu'>
            <button onClick={()=>{setGame('quiz')}}>Start Quiz</button>
        </div>
    )
}

export default MainMenu

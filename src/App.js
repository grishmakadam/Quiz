
import './App.css';
import React ,{useState,useContext} from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Context/Context';

function App() {

  const [game,setGame]=useState('menu')
  
  
  return (
    <div className="App">
      <QuizContext.Provider value={{game,setGame}}>
      {game==='menu'?<MainMenu/>:null}
      {game==='quiz'?<Quiz/>:null}
      {game==='end' && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;

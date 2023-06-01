import React, {useEffect, useState} from 'react'

import { Modes } from './modes';

function padTime(time){
  return time.toString().padStart(2,"0");

}

const Pomodoro = (styleRoot) => {

  const [title, setTitle] = useState("Temporizador")
  const [timeLeft, settimeLeft] = useState(25 * 60)
  const [isRunning, setisRunning] = useState(false)
  const [isDark,setIsDark] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60))
  const seconds = padTime(Math.floor(timeLeft - minutes * 60))


  const startTimer = () =>{
    setTitle("Concentrate!!")
    setisRunning(true);
  }

  const stopTimer = () =>{
    setTitle("Esperamos...")
    setisRunning(false)

  }

  const resetTimer = () =>{
    setTitle("Inicia el contador para comenzar")
    setisRunning(false)
    settimeLeft(25*60)
  }
  useEffect(() => {

    let interval;
    if(isRunning){
      interval = setInterval(() =>{

        settimeLeft((time)=>{
          return time-1;
        })
      
      },1000) 
    }
  
    return () => {
      clearInterval(interval);
    }
  }, [isRunning])
  

  return (


    <div className='container'>

      <Modes propSetIsDark={setIsDark} propIsDark={isDark} styleRoot={styleRoot} ></Modes>

      <h1>{title}</h1>
      <div>
        <span className='textSpan'>
          {minutes}
        </span>

        <span className='textSpan'>
          :
        </span>

        <span className='textSpan'>
          {seconds}
        </span>

      </div>

      <div className='buttons-container'>
        { !isRunning && <button onClick={startTimer}>Iniciar</button>}
        {isRunning && <button onClick={stopTimer}>Detener</button>}
        <button onClick={resetTimer}>Resetear</button>
      </div>


    </div>
  )
}

export default Pomodoro
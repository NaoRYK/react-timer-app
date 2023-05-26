import React, {useEffect, useState} from 'react'
function padTime(time){
  return time.toString().padStart(2,"0");

}

const Pomodoro = () => {

  const [title, setTitle] = useState("Inicia el contador para comenzar")
  const [timeLeft, settimeLeft] = useState(25 * 60)
  const [isRunning, setisRunning] = useState(false)

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
    <div>
      <h1>{title}</h1>
      <div>
        <span>
          {minutes}
        </span>

        <span>
          :
        </span>

        <span>
          {seconds}
        </span>

      </div>

      <div className='buttons-container'>
        { !isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>


    </div>
  )
}

export default Pomodoro
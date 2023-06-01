import React from 'react'
import {render} from 'react-dom'
import Pomodoro from './Pomodoro'

const styleRoot = document.querySelector(':root');
const App = () => {
  return (
    <Pomodoro styleRoot={styleRoot}></Pomodoro>
  )
}

render(React.createElement(App), document.getElementById("root"));
import React from 'react'
import Logo from './img/logo.svg'

const arr = [
  <span> vue </span>,
  <span> react </span>
]

const myStyle = {
  fontSize: 100,
  width: 900,
  height:100,
  color: '#FF0000'
}

function HellowMessage(props) {
  return <h1>hello world !</h1>
}

function App() {
  return (
    <div className="App">
      <HellowMessage />
      <h1 style = {myStyle} >  {arr}   </h1>
      <img style = {myStyle} src={Logo} alt="logo"/>  
    </div>
  )
}

export default App;
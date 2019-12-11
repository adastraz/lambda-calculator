import React, { useState } from "react"
import "./App.css"
import data from './data.js'
import Display from './components/DisplayComponents/Display.js'
import Logo from "./components/DisplayComponents/Logo"
import SpecialButton from './components/ButtonComponents/SpecialButtons/SpecialButton.js'
import OperatorButton from './components/ButtonComponents/OperatorButtons/OperatorButton.js'
import NumberButton from './components/ButtonComponents/NumberButtons/NumberButton.js'

function App() {
  console.log(data)
  
  const [display, setDisplay] = useState(0)

  const specialClickHandler = (buttonName) => {
    console.log(buttonName)
    setDisplay(buttonName)
  }
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display 
        display = {display}
        />
        <section className= 'buttonContainer'>
          {
            data.specials.map(x => {
              return (
                <SpecialButton 
                buttonName={x} 
                buttonClick = {specialClickHandler}
                />
              )
            })
          }
          {
            <OperatorButton
            buttonName={data.operators[0].char}
            buttonClick = {specialClickHandler}
            />
          }
          {
            data.numbers.map(x => {
              return (
                <NumberButton
                buttonName={x}
                buttonClick = {specialClickHandler}
                />
              )
            })
          }
        </section>
      </div>
    </div>
  );
}

export default App;

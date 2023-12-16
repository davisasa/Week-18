import React, {useState} from 'react'

export default function FunctionCounter() {

  let [number, setNumber] = useState(0)

 
  let handleIncrease = () =>{
     setNumber(number + 1)
  }

  let handleDecrease = () =>{
    setNumber(number - 1)
 }

  return (
    <div>
      
      <h1>FunctionCounter</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <h1>{number}</h1>
    </div>
  )
}
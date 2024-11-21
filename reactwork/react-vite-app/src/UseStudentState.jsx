import React, { useState } from 'react'

function UseStudentState() {
    const [count, setcount]=useState(20);
    function doIncrement(){
      console.log("Hi inside do increment");
      setcount(count+100)
    }
    function doDecrement(){
      console.log("Hi inside do increment");
      setcount(count-5)
    }
  return (
    <>
    <div style={{color:'red',fontSize:'40px',padding:'200px',border:'2px solid red',width:'100px',height:'100px',marginLeft:'600px',backgroundColor:'aqua'}}>{count}
    <div>
      <button id='btn' onClick={doIncrement} style={{backgroundColor:'peru'}}>Increment Counter</button>
      <button id='btn' onClick={doDecrement} style={{backgroundColor:'magenta'}}>Decrement Counter</button>
    </div>
    </div>
    </>
  )
}

export default UseStudentState
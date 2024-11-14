import React from 'react'
import Student from './Student';
import logo from "./assets/img.png"
function App() {
  const h1=<h1>Hello World</h1>;
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div style={{backgroundColor:'cyan'}}>
      {h1}
      <div style={mystyle}>
      ABES Engineering College
      </div>
      <div>
        <Student college="ABES Engineering College"
        name="Bhumika"
        pic={<img src={logo} height={100} width={100}/>}
        branch="CSE"
        roll="50"
        sec="B"
        />
           <Student college="ABES Engineering College"
        name="Riya"
        branch="CS"
        roll="33"
        sec="A"
        />
           <Student college="ABES Engineering College"
        name="Rahul"
        branch="CSE-AIML"
        roll="47"
        sec="C"
        />
      </div>
    </div>
    
  )
}

export default App
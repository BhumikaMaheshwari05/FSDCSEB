import React from 'react'
import Student from './Student';
import logo from "./assets/img.png"
import UseStudentState from './UseStudentState';
function App() {
  const h1=<h1>Hello World</h1>;
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  const Studentdata=[{
    college:"ABES Engineering College",
    name:"Rahul",
    branch:"CSE",
    sec:"A",
    roll:24650,
    
},
{
  college:"ABES Engineering College",
  name:"Riya",
  branch:"CSE",
  sec:"A",
  roll:24622,
  
},
{
  college:"ABES Engineering College",
  name:"Simran",
  branch:"CSE",
  sec:"A",
  roll:24634,
  
}

]
    // <div style={{backgroundColor:'cyan'}}>
    //   {h1}
    //   <div style={mystyle}>
    //   <center>ABES Engineering College</center>
    //   </div>
    //   <div style={{display:'flex',justifyContent:'center'}}>
    //   {Studentdata.map((ele)=>{
    //     return <Student data={ele}/>

    //   })
    //       }
    //     {/* <Student data={Studentdata[0]}/> */}
    //     {/* <center><Student college="ABES Engineering College"
    //     name="Bhumika"
    //     pic={<img src={logo} height={100} width={100} style={{marginRight:'20px'}}/>}
    //     branch="CSE"
    //     roll="50"
    //     sec="B"
    //     /></center>
    //     <center><Student college="ABES Engineering College"
    //     name="Riya"
    //     branch="CS"
    //     roll="33"
    //     sec="A"
    //     /></center>
    //     <center><Student college="ABES Engineering College"
    //     name="Rahul"
    //     branch="CSE-AIML"
    //     roll="47"
    //     sec="C"
    //     /></center> */}
    //   </div>
    // </div>
    return (
      <div>
        <h2>Hello Using useState Hook</h2>
        <div>
          <UseStudentState/>
        </div>
      </div>
    
  )
}

export default App
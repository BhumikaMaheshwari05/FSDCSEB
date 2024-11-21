import React, { useState } from 'react'
import dog from './dogg.webp';
function Imagemanipulation() {
  const[height,setHeight]=useState(150);
  const[width,setWidth]=useState(120);
  const[rotate,setRotate]=useState(0);
  const [bgColor, setBgColor] = useState(0);
  const colors = [' #ffbf87', '#74bec1', ' #b2e672', '#ffdd00', '#f48db4'];
  function EnhanceHeight(){
    setHeight(height+30);
  }
  function EnhanceWidth(){
    setWidth(width+30);
  }
  function RotateImage(){
    setRotate(rotate+30);

  }
  function Changebackground(){
    setBgColor((bgColor + 1) % colors.length);
  }
  function DecreaseHeight(){
    setHeight(height-30);
  }
  function DecreaseWidth(){
    setWidth(width-30);
  }

  return (
    <div style={{border:'2px solid red',height:'650px',width:'650px',marginLeft:'250px',backgroundColor:'lightblue'}}>
        <div style={{backgroundColor:colors[bgColor],height:'250px',width:'200px',marginLeft:'200px',marginTop:'100px'}}>
            <img src={dog} style={{transform:`rotate(${rotate}deg)`,height:height, width:width ,border:'2px solid red',margin:'40px'}} alt="dog image" />
        </div>
        <div style={{margin:'60px',gap:'20px',display:'flex'}}>
          <button style={{backgroundColor:'red'}} id='btn' onClick={EnhanceHeight}>EnhanceHeight</button>
          <button id='btn' onClick={EnhanceWidth} style={{backgroundColor:'plum'}}>EnhanceWidth</button>
          <button id='btn'onClick={RotateImage} style={{backgroundColor:'greenyellow'}}>Rotate</button>
          <button id='btn' onClick={Changebackground} style={{backgroundColor:'beige'}}>ChangeBackground</button>
        </div>
        <div>
        <button id='btn' onClick={DecreaseHeight} style={{backgroundColor:'cyan',marginBottom:'80px',marginLeft:'150px'}}>DecreaseHeight</button>
        <button id='btn' onClick={DecreaseWidth} style={{backgroundColor:'orange',marginBottom:'80px',marginLeft:'50px'}}>DecreaseWidth</button>
        </div>
        
    </div>
  )
}

export default Imagemanipulation 
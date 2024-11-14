import React from 'react'
import './student.css'
import logo from "./assets/img.png"

function Student({data}) {
  return (
    <div className='icard'>
      {/* {
        JSON.stringify(data)
      } */}
      <table>
       <tbody>
        <tr>
          <td colSpan={2}>{data.college}
           
          </td></tr>
          <tr><td>Pic</td><td>{data.pic}</td></tr>
          <tr><td>Name</td><td>{data.name}</td></tr>
          <tr><td>Branch</td><td>{data.branch}</td></tr>
          <tr><td>Roll_Number</td><td>{data.roll}</td></tr>
          <tr><td>Section</td><td>{data.sec}</td></tr>
         
       </tbody>
      </table>
      </div>
  )
}
// Student.defaultProps={
//   college:"AKG Engineering College"
// }
export default Student
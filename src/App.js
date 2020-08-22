import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const studentDetails = [
    { name: "sakib Hossen", id: "502", habit: "Good" },
    { name: "Akash Hossen", id: "478", habit: "Not Bad" },
    { name: "Niamul Hossen", id: "402", habit: "Very Good" },
    { name: "Naimul Hossen", id: "69", habit: "Good" },
    { name: "Sheikh Hossen", id: "501", habit: "Bad" },
    { name: "Habiba Khatun", id: "230", habit: "Nice" },
    { name: "Nirupoma Roy", id: "121", habit: "Modest" }
  ]
  
  // const studentNames = ["Sakib", "Akash", "Niamul", "nainul", "Kalam"]
  // const singleStudent = studentName.map(singleStudent => singleStudent)
  

  return (
    <div className="App">

      <header className="App-header">

        <StudentNumber></StudentNumber>

       {
    
            studentDetails.map(result => (
              <StudentInfo name={result.name} id={result.id} habit={result.habit}></StudentInfo>
            ))
      }


      </header>
    </div>
  );
}

function StudentInfo(props) {
  console.log(props)


  const studentStyle = {
    border: "2px solid grey",
    color: "White"
    , boxShadow: "7px 7px 20px grey"
    , margin: "20px",
    padding: "30px"
    , fontFamily: "times new roman"
    , backgroundColor: "purple"
  }
  // const{name,id,habit} = student


  return (
    <div style={studentStyle}>
      <h2>University of Dhaka</h2>
      <h3>Student Name: {props.name}</h3>
      <h3>Student Id: {props.id || "no id"}</h3>
      <p>Student character : {props.habit} </p>
    </div>

  )
}

function StudentNumber() {
  const [count, setCount] = useState(0)
  const IncreaseBtnHandler = () => setCount(count + 1)
  return (
    <div>
      <EnrollStudent number={count}></EnrollStudent>
      
      <h2>Number of student : {count}</h2>
      <button onClick={IncreaseBtnHandler} style={{ padding: "15px", fontSize: "15px", backgroundColor: "goldenrod", color: "white" }}>Enroll student</button>
    </div>
  )
}

function EnrollStudent(props) {
  return (
    <h4>Enrolled student Number: {props.number} </h4>
  )
}
export default App;

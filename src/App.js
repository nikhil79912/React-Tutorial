import React from 'react'
import User from './component/user'
const App=()=>{
  function getData(){
    alert("hello from app")
  }
  return (
    <div>
     <h1>Nikhil Technical</h1>
     <User data={getData}/>
    </div>
  )
}

export default App;
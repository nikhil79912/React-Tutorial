import React from 'react'
import User from './component/user'



const App=()=>{
  const[name,setname]=React.useState("nik")
  return (
    <div className='app'>
      <h1>Render Method In React </h1>
      <User name={name}/>
      <button onClick={()=>setname("nikka")}>update Name</button>
    </div>
  )
}

export default App;
import React from 'react'
// import User from './component/user'
import Student from './component/Student'
class App extends React.Component{
  constructor(){
    super()
      this.state={
        show:true
      }
    }
  
  render(){
    
    return (
      <div className='app'>
        {
          this.state.show ? <Student/> :<h1>child component Removed</h1>
        }
       <Student/>
      <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component </button>

      </div>
    )
    }
  }



  


export default App;
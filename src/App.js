import React from 'react'
// import User from './component/user'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    console.warn('constructor')
  }
  shouldComponentUpdate(){
    console.warn("componetn did Update" ,this.state.count)
    if(this.state.count>5 && this.state.count<10)
   return true
    }
  
  render(){
    console.warn("render")
    return (
      <div className='app'>
       <h1>Should Component update {this.state.count} </h1>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>updadate name</button>
      </div>
    )
    }
  
  
  }



  


export default App;
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
  componentDidUpdate(preProps,preState,snAPshot){
    console.warn("componetn did Update" ,preState.count,this.state.count)
    if(this.state.count<10){
      this.setState({count:this.state.count+1})
      // alert("data is already same")
    }
  }
  render(){
    console.warn("render")
    return (
      <div className='app'>
       <h1>Component Did update {this.state.count} </h1>
      <button onClick={()=>{this.setState({count:1})}}>updadate name</button>
      </div>
    )
  }
  
  
}



  


export default App;
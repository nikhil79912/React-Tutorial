import React from 'react'
// import User from './component/user'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:"nikk"
    }
    console.warn('constructor')
  }
  componentDidMount(){
    console.warn("componetn did mount")
  }
  render(){
    console.warn("render")
    return (
      <div className='app'>
       <h1>Component Did Mount {this.state.name}</h1>
       <button onClick={()=>this.setState({name:"thor"})}>update name</button>
      </div>
    )
  }
  
  
}



  


export default App;
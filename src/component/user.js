import React from "react";
 
class User extends React.Component{
   render(){
console.warn("render method",this.props)
return(
    <div>
        <h1>user Component</h1>
    </div>
)
   }
  
}

export default User;
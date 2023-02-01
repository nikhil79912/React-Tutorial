import React from "react";
class Student extends React.Component{

    componentWillUnmount(){
        console.warn("component will unmount call")
    }
    render(){

        return (
            <div className="App">
                <h1>Student Component</h1>
            </div>
        )
    }
} export default Student;
import { Component } from "react";


class Student extends Component
{
    render(){
        const {name, age, course, isActive} = this.props
        let status;
        if (isActive)
        {
            status = "Active"
        }
        else{
            status = "Inactive"
        }
        return (
        <div>
            <h1>name: {name}</h1>
            <h2>age: {age}</h2>
            <h3>course: {course}</h3>
            <h3>status: {status}</h3>
        </div>
        )
    }
}

class Application extends Component{
    render()
    {
        return(
            <>
                <Student name="Dipak" age={22} course="React" isActive = {true}></Student>
                <Student name="Ram" age={21} course="Python" isActive = {false}></Student>
                <Student name="Hari" age={23} course="JavaScript" isActive = {false}></Student>
            </>
        )
    }
}

export default Application
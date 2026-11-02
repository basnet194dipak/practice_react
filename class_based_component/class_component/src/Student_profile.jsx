import { Component } from "react";

class Student_Profile_Manager extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name:"Dipak",
            age:22,
            isEnrolled:false 
        }

        this.change_name = this.change_name.bind(this)
        this.increment = this.increment.bind(this)
        this.toggle_status = this.toggle_status.bind(this)
    }
    
    increment(){
        this.setState({
            age: this.state.age + 1
        })
    }

    toggle_status()
    {
        if (this.state.isEnrolled == true)
        {
            this.setState({
                isEnrolled:false
            })
        }
        else{
            this.setState({
                isEnrolled:true
            })
        }
    }

    change_name({new_name})
    {
        this.setState({
            name:new_name
        })
    }
    render(){
        return(
            <div>
                <ul>
                    <li>name: {this.state.name} <button onClick={()=>this.change_name({new_name:"React Developer"})} >Change Name</button></li>
                    <li>age: {this.state.age}<button onClick={this.increment}>Increase</button></li>
                    <li>enrolled: {String(this.state.isEnrolled)} <button onClick={this.toggle_status}>Change</button></li>
                </ul>
            </div>
        )
    }
}

export default Student_Profile_Manager
import { Component } from "react";

class Student extends Component{
    render()
    {

        return(
            <div>
                <h1>Name:{this.props.name} <button onClick={this.props.changeName}>Change Name</button> </h1>
                <h2>
                    Age:{this.props.age} <button onClick={this.props.increaseAge}>Increase Age</button>
                </h2>
                <h3>Enrolled: {this.props.isEnrolled ? "Enrolled":"Not Enrolled"} <button onClick={this.props.toggleEnrollment}>Change Enrollment</button></h3>
            </div>
        )
    }
}


class ParentStudent extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            studentName: "Dipak",
            age: 22,
            isEnrolled: false
        };

        this.changeName = this.changeName.bind(this);
        this.increaseAge = this.increaseAge.bind(this);
        this.toggleEnrollment = this.toggleEnrollment.bind(this);
    }

    changeName(new_name){
        this.setState(
            {
                studentName:new_name
            }
        )
    }

    increaseAge(){
        this.setState({
            age:this.state.age + 1
        })
    }

    toggleEnrollment(){
        if (this.state.isEnrolled)
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


    render(){
        return(
            <Student name={this.state.studentName} age={this.state.age} isEnrolled={this.state.isEnrolled} changeName={()=>this.changeName("Rahul")} increaseAge={this.increaseAge} toggleEnrollment={this.toggleEnrollment}></Student>
        )
    }
}

export default ParentStudent;
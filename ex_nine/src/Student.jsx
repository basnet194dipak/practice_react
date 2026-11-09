import { Component } from "react";

class StudentCard extends Component{
    constructor(props)
    {
        super(props)

        this.state = {
            id:this.props.id,
            name: this.props.name,
            course:this.props.course,
            isEnrolled:this.props.isEnrolled
        }
    }

    render(){
        return(
            <>
                <h1>Name: {this.state.name}</h1>

                <h2>Course: {this.state.course}</h2>

                <h2>Status: {this.state.isEnrolled ? "Enrolled":"Not Enrolled"}</h2>
            </>
        )
    }

}

export {StudentCard};
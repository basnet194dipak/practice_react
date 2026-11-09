import { Component } from "react";


class DashboardHeader extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            total_student: this.props.total_student,

            title:this.props.title,
        }
    }

    render(){
        return (
            <>
                <h1>{this.state.title}</h1>
                <h2>Total Student: {this.state.total_student}</h2>
            </>
        )
    }
}

export {DashboardHeader}
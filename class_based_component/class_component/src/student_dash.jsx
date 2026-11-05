import { Component } from "react";

class Student extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name:"Dipak",
            score:0
        }

        this.increase_score = this.increase_score.bind(this)
        this.reset_score = this.reset_score.bind(this)
    }

    componentDidMount(){
        console.log("Student Dashboard Mounted!")
    }

    increase_score()
    {
        this.setState({
            score:this.state.score + 1
        })
    }

    componentDidUpdate(prevProps, prevState)
    {
        

        if (prevState.score !== this.state.score) {
            console.log("Score changed!");
            console.log("Previous Score: ",prevState.score)

            console.log("Current Score:", this.state.score)
        }

        else{
            console.log("Score hasn't changed at all")
        }
    }

    reset_score()
    {
        this.setState({
            score:0
        })
    }

    componentWillUnmount(){
        console.log("Student Dashboard Unmounted!")
    }

    render(){
        return(
            <div>
                <h1>score: {this.state.score} </h1>
                <button onClick={this.increase_score}>Increase score</button>
                <button onClick={this.reset_score}> Reset Score</button>
            </div>
        )
    }


}

class StudentDashboard extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            show_student : true
        }

        this.render_Component = this.render_Component.bind(this)
        this.delete_Component = this.delete_Component.bind(this)
    }

    render_Component()
    {
        this.setState({
            show_student:true
        })
    }

    delete_Component()
    {
        this.setState({
            show_student:false
        })
    }
    render(){
        return (
            <div>
                {
                   
                    this.state.show_student &&  <Student/>
                }

                <button onClick={this.render_Component}>Render Component</button>
                <button onClick={this.delete_Component}>Delete Component</button>
            </div>
        )
    }
}

export default StudentDashboard 
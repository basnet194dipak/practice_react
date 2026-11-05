import { Component } from "react";

class ScoreMonitor extends Component{

    constructor(props)
    {
        super(props)
        
        this.state = {
            renderCount: 0
        };
    }

    componentDidMount()
    {
        console.log("Component did mount")
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevProps.score !== this.props.score)

        {
            console.log("The state has been updated.")
            console.log("Current Score: ", this.props.score)
            console.log("Prev Score: ", prevProps.score)

            this.setState({
                renderCount: this.state.renderCount + 1
            })
        }   
        
        if (prevState.renderCount !== this.state.renderCount)
            {
                console.log("render Count:", this.state.renderCount)
            }
    }

    render()
    {
        return(
            <>
                <h1>Score: {this.props.score}</h1>
            </>
        )
    }
}

class Parent extends Component{
    constructor(props){
        super(props)

        this.state = {
            studentScore:50
        }

        this.increaseScore = this.increaseScore.bind(this)

        this.decreaseScore = this.decreaseScore.bind(this)
    }

    increaseScore()
    {
        this.setState({
            studentScore: this.state.studentScore + 1
        })
    }

    decreaseScore()
    {
        this.setState({
            studentScore: this.state.studentScore - 1
        })
    }
    render()
    {
        return (
            <>

                <ScoreMonitor score={this.state.studentScore} />
                <button onClick={this.increaseScore}>Increase Parent Score:</button>

                <button onClick={this.decreaseScore}> Decrease Parent Score:</button>
            </>
        )
    }
}

export default Parent
import { Component } from "react";

class Counter extends Component
{
    state = {
        count:0
    }

    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = ()=>{
        if (this.state.count > 0)
        {
            this.setState({
                count:this.state.count - 1
            })
        }
        else{
            alert("Count cannot go lesser than 0")
        }
        
    }

    reset = ()=>{
        this.setState({
            count: 0
        })
    }
    render()
    {
        return(
            <div>
                <h2> Count: {this.state.count}</h2>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter
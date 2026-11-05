import { Component } from "react";
class AdvancedCounter extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            count: 0,
            incrementCount:0
        }

        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
        this.Increment_three = this.Increment_three.bind(this);
        this.Reset = this.Reset.bind(this);
        this.Increment_ten = this.Increment_ten.bind(this);
    }

    // Create an Increment button.
    Increment()
    {
        this.setState({
            // Increase count by one.
            count: this.state.count + 1,

            // Increase incrementCount by one.
            incrementCount: this.state.incrementCount + 1
        })

    }

    // Create a Decrement button.
    Decrement()
    {
        // Do not allow negative values.
        if (this.state.count > 0)
        {
            this.setState({
                // Decrease count by one.
                count: this.state.count - 1
            })
        }
    }

    // Create an Increase by 3 button
    Increment_three()
    {

        // Increase the counter by exactly three.
        // Use the functional form of setState().

        // Do not simply set the final value directly.


        this.setState(prevState =>({
            count: prevState.count + 1
        }))

        this.setState(prevState =>({
            count: prevState.count + 1
        }))

        this.setState(prevState =>({
            count: prevState.count + 1
        }))
    }

    // Create a Reset button.
    Reset(){
        this.setState(
            {

            // Set count back to zero.
            count:0,

            // Set incrementCount back to zero.
            incrementCount:0

            },

            // Use the second argument of setState() to log "Counter reset successfully!" after the update.
            () => {
                    console.log("Counter reset successfully!");
                }
        )
    }

    Increment_ten()
    {

        // Additional challenge
// Create a button called Increase by 10.

// Use a loop or another suitable approach with functional setState() updates to increase the count by exactly ten.
        for(let i = 0; i < 10; i++)
        {
            this.setState(prevState =>({
            count: prevState.count + 1
            }))
        }
    }   
    render(){
        return(
            <>
            {/* Display both count and incrementCount. */}
                <h1>Count:{this.state.count}</h1>

                <h2>Increment: {this.state.incrementCount}</h2>


                <button onClick={this.Increment}>Increment: </button>
                <button onClick={this.Decrement}>Decrement: </button>
                <button onClick={this.Increment_three}>Increment by three: </button>

                <button onClick={this.Increment_ten}>Increment by ten: </button>
                <button onClick={this.Reset}>Reset: </button>
            </>
        )
    }
}

export default AdvancedCounter
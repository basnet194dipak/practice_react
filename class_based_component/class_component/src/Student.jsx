import { Component } from "react";

class Students extends Component{
    render(){
        const {name, age} = this.props
        return(
            <div>
                <h1>{name}</h1>
                <p>{age}</p>
            </div>
        )
    }
}


class Apps extends Component{
    render() {
      return (
        <div>
            <Students name="Dipak" age={23}></Students>
        </div>
      )
    }
}

export {Students, Apps}
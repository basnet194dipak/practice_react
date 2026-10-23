import { useState } from "react"

function Inputs({htmlFor, type, value, placeholder, disabled, label_info, handle_info})
{
    return(
        <>
            <section className="entry">
                <label htmlFor={htmlFor}>{label_info}</label>
                <input type={type} id={htmlFor} name={htmlFor} value={value} placeholder ={placeholder}disabled={disabled} onChange={handle_info}/>
            </section>
        </>
    )
}


function Study({state, state_handler, handleSubmit})
{
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <Inputs htmlFor={"Institution"} type={"text"} value={state.Institution} placeholder={"Enter the name of the Institution"} label_info={"Institution Name"} handle_info={state_handler}/>
                <Inputs htmlFor={"degreeOf"} type={"text"} value={state.degreeOf} placeholder={"Enter the name of the degree"} label_info={"Degree Name:"} handle_info={state_handler}/>

                <Inputs htmlFor={"start_date"} type={"date"} value={state.start_date} placeholder={"Enter when did you start your degree"} label_info={"Start Date:"} handle_info={state_handler}/>
                <Inputs htmlFor={"end_date"} type={"date"} value={state.end_date} placeholder={"Enter when did your degree end"} label_info={"End Date:"} handle_info={state_handler}/>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

function Display({edu})
{
    return (
        <div>
            <h2>Education Details</h2>

            {edu.map((item, index)=>(
                <section key={index}>

                        <h3>Institution:{item.Institution}</h3>
                    <p>Degree: {item.degreeOf}</p>
                    <p>Start Date: {item.start_date}</p>
                    <p>End Date: {item.end_date}</p>
                    <hr />

                </section>
            ))}
        
        </div>
    )
}
function Education(){
    const [arr, setArr] = useState([])
    const [state, setState] = useState({
        Institution:"",
        degreeOf:"",
        start_date:"",
        end_date:"",
    })

    function state_handler(e)
    {
        const {name, value} = e.target
        setState(prev =>(
            {
            ...prev,
            [name]:value,
        }
        ))
    }
    
    function handleSubmit(e)
    {
        e.preventDefault()
        setArr(prev => [...prev, { ...state }])


        setState({
            Institution: "",
            degreeOf: "",
            start_date: "",
            end_date: "",
        })
    }


    return(
        <>
            <Study state={state} state_handler={state_handler} handleSubmit={handleSubmit}/>
            <Display edu={arr}/>
        </>
    )
}

export default Education
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

function Forms({state, state_handler, handleSubmit})
{
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <Inputs htmlFor="fname" type="text" value={state.fname} placeholder="Enter your first name" disabled={false} label_info="First Name" handle_info={state_handler}/>
                <Inputs htmlFor="lname" type="text" value={state.lname} placeholder="Enter your last name" disabled={false} label_info="Last Name" handle_info={state_handler}/>
                <Inputs htmlFor="email" type="email" value={state.email} placeholder="Enter your email" disabled={false} label_info="Email" handle_info={state_handler}/>
                <Inputs htmlFor="occupation" type="text" value={state.occupation} placeholder="Enter your Occupation" disabled={false} label_info="Occupation" handle_info={state_handler}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function SubmittedProfile({profile})
{
    return(
        <>
            <section className="display"> 
                <div>
                    <h2>User Profile</h2>
                    <p>Full Name: {profile.fname} {profile.lname}</p>
                    <p>Email: {profile.email}</p>
                    <p>Occupation: {profile.occupation}</p>
                </div>
            </section>
        </>
    )
}

function Apps()
{
    const [states, setStates] = useState({
        fname:"",
        lname:"",
        email:"",
        occupation:""
    })

    const [profile, setProfile] = useState({
        fname:"",
        lname:"",
        email:"",
        occupation:""
    })

    function handleSubmit(e)
    {
        e.preventDefault()
        setProfile(states)
    }

    function state_handler(e)
    {
        const {name, value} = e.target
        setStates(prev =>({
            ...prev, 
            [name]:value
        }))
    }
    return(
        <>
            <Forms state={states} state_handler={state_handler} handleSubmit={handleSubmit}/>
            <SubmittedProfile profile={profile} />
        </>
    )
}

export default Apps
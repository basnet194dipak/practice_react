import { useState } from "react"

function Form()
{
    const [edit, setEdit] = useState(true)
    const [name, setName] = useState("")

    function handle_submit(e)
    {
        e.preventDefault()
        setEdit(!false)
    }

    return(
        <>
        
        <form action="" onSubmit={handle_submit}>
            <label htmlFor="name">
                <input type="text" id="name" name="name" placeholder="Enter your name" disabled={edit} onChange={(e)=>{setName(e.target.value)}}/>
            </label>

            <button type="submit" value="Submit">Submit</button>
            <button type="button" value="Edit" onClick={()=>{setEdit(false)}}>Edit</button>

        </form>

        <h2>{name}</h2>
        
        </>
    )
}

export default Form
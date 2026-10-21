import { useState } from "react"

function Input({htmlFor, type, value, placeholder, disabled, label_info, handle_info})
{

    return(
        <>
            <section className="entry">
                <label htmlFor={htmlFor}>{label_info}</label>
                <input type={type} id={htmlFor} name={htmlFor} value={value} placeholder ={placeholder}disabled={disabled} onChange={handle_info}/>
            </section>
            <section className="display">
                <h2>{value}</h2>
            </section>
        </>
    )
}

function Forms()
{
    const [infos, setInfos] = useState({name: "",
        email: "",
        phone: "",
        password: ""})
    function handle_info(e)
    {
        const {name, value} = e.target
        setInfos(prev =>({
            ...prev, 
            [name]:value
        }))
    }
    return(
        <>
            <Input
                htmlFor="name"
                type="text"
                value={infos.name}
                placeholder="Enter your name"
                disabled={false}
                label_info="Name"
                handle_info={handle_info}
                />

                <Input
                htmlFor="email"
                type="email"
                value={infos.email}
                placeholder="Enter your email"
                disabled={false}
                label_info="Email"
                handle_info={handle_info}
                />

                <Input
                htmlFor="phone"
                type="tel"
                value={infos.phone}
                placeholder="Enter your phone number"
                disabled={false}
                label_info="Phone Number"
                handle_info={handle_info}
                />

                <Input
                htmlFor="password"
                type="password"
                value={infos.password}
                placeholder="Enter your password"
                disabled={false}
                label_info="Password"
                handle_info={handle_info}
                />
        </>
    )
}

export default Forms
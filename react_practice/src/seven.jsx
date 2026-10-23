function Inputs({htmlFor, lableinfo})
{
    return (
        <>
            <label htmlFor="">{lableinfo}</label>
            <input htmlFor={htmlFor} type="text" />
        </>
    )
}
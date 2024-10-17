

export const NumberInput = ({label, name, type = "number"}) => {
    return (
        <label>
            {label}
            <input type={type} name={name}/>
        </label>
    )
}
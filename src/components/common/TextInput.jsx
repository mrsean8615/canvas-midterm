import { useForm } from "../../context/FormProvider"

export const TextInput = ({label, name, type = "text"}) => {

    const form = useForm();

    return (
        <label>
            {label}
            <input required type={type} name={name} onChange={(e) => {
                form.setValue(name, e.target.value)
            }}/>
        </label>
    )
}
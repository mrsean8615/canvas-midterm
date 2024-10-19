import { useForm } from "../../context/FormProvider"

export const TextArea = ({label, name}) => {

    const form = useForm();

    return (
        <label>
            {label}
            <textarea 
                required
                name={name} 
                onChange={(e) => {
                    form.setValue(name, e.target.value)
                }}
            />
        </label>
    )
}
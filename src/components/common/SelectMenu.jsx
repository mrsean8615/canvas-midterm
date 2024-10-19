

import { useForm } from "../../context/FormProvider"

export const SelectMenu = ({label, name}) => {

    const form = useForm();

    return (
        <label>
            {label}
                <select name={name} onChange={(e) => {
                    form.setValue(name, e.target.value)
                }}>
                    <option value='Student'>Student</option>
                    <option value='Admin'>Teacher</option>

                </select>
        </label>
    )
}
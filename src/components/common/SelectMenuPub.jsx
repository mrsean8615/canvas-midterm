

import { useForm } from "../../context/FormProvider"

export const SelectMenuPub = ({label, name}) => {

    const form = useForm();

    return (
        <label>
            {label}
                <select name={name} onChange={(e) => {
                    form.setValue(name, e.target.value)
                }}>
                    <option value='Unpublished'>Unpublished</option>
                    <option value='Published'>Published</option>

                </select>
        </label>
    )
}
import { useState } from "react"
import { SubmitButton } from "../components/common/SubmitButton"
import { TextInput } from "../components/common/TextInput"
import { FormProvider } from "../context/FormProvider"
import { useApi } from "../api/apiV3"
import { Link, useNavigate } from "react-router-dom"
import { TextArea } from "../components/common/TextArea"
import { SelectMenu } from "../components/common/SelectMenu"
import { NumberInput } from "../components/common/NumberInput"

export const CreateModules = () => {
    const [error, setError] = useState();
    const modApi = useApi('modules')
    const navigate = useNavigate()


    const handleSubmit = async (data) => {
        if(!data.modTitle || 
            !data.modDesc || 
            !data.modPage ||
            !data.modPub) {
            setError('One or more inputs are empty')
        } else {
            await modApi.create(data)
            navigate('/modules')
            console.log(modApi.getAll())
        }
    }
    
    return (
        <div className="create-an box">
            <FormProvider onSubmit={handleSubmit}>
                <Link to='/announcements'><span>&lt;-- Return to Annoucements</span></Link>
                <p>{error}</p>
                <label className="atitle">
                    <p>Title:</p>
                    <TextInput type="text" name='modTitle' />
                </label>
                <label className="adesc mdesc">
                    <p>Description</p>
                    <TextArea name='modDesc' />
                </label>
                <label className="apage announcement">
                    <p>Number of pages</p>
                    <NumberInput name='modPage' />
                </label>
                <label className="ms">
                    <SelectMenu name='modPub' value1='Unpublished' value2='Published' />
                </label>
                
                <SubmitButton>Post Module</SubmitButton>
            </FormProvider>
        </div>
    )
}
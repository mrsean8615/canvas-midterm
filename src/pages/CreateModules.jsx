import { useState } from "react"
import { SubmitButton } from "../components/common/SubmitButton"
import { TextInput } from "../components/common/TextInput"
import { FormProvider } from "../context/FormProvider"
import { useApi } from "../api/apiV3"
import { Link, useNavigate } from "react-router-dom"
import { TextArea } from "../components/common/TextArea"
import { NumberInput } from "../components/common/NumberInput"
import { SelectMenuPub } from "../components/common/SelectMenuPub"

export const CreateModules = () => {
    const [error, setError] = useState();
    const modApi = useApi('modules')
    const navigate = useNavigate()


    const handleSubmit = async (data) => {
        if(!data.modTitle || 
            !data.modDesc || 
            !data.modPage) {
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
                <Link to='/modules'><span>&lt;-- Return to Modules</span></Link>
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
                    <SelectMenuPub name='modPub' />
                </label>
                
                <SubmitButton>Post Module</SubmitButton>
            </FormProvider>
        </div>
    )
}
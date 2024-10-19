import { useState } from "react"
import { SubmitButton } from "../components/common/SubmitButton"
import { TextInput } from "../components/common/TextInput"
import { FormProvider } from "../context/FormProvider"
import { useApi } from "../api/apiV3"
import { Link, useNavigate } from "react-router-dom"
import { TextArea } from "../components/common/TextArea"

export const CreateAnnouncement = () => {
    const [error, setError] = useState();
    const annouceApi = useApi('annoucements')
    const navigate = useNavigate()


    const handleSubmit = async (data) => {
        if(!data.annouceTitle || !data.annouceDesc) {
            setError('One or more inputs are empty')
        } else {
            await annouceApi.create(data)
            navigate('/announcements')
            console.log(annouceApi.getAll())
        }
    }
    
    return (
        <div className="create-an box">
            <FormProvider onSubmit={handleSubmit}>
                <Link to='/announcements'><span>&lt;-- Return to Annoucements</span></Link>
                <p>{error}</p>
                <label className="atitle">
                    <p>Title:</p>
                    <TextInput type="text" name='annouceTitle' />
                </label>
                <label className="adesc">
                    <p>Description</p>
                    <TextArea name='annouceDesc' />
                </label>
                <SubmitButton>Post Announcement</SubmitButton>
            </FormProvider>
        </div>
    )
}
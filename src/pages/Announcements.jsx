import { useUserInfo } from "../context/TrackUser";
import { useNavigate } from "react-router-dom";
import { useEditButton } from "../hooks/useEditButton";
import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useDelete } from "../hooks/useDelete";

export default function Announcements({ initialData }) {
    const deleteData = useDelete();
    const { userInfo } = useUserInfo();
    const { isEdit, value, handleEdit, handleAUpdate, handleChange } = useEditButton(initialData);
    const navigate = useNavigate();
    const [updatedData, setData] = useState([]);
    const [dropIndex, setDropIndex] = useState(null);
    const data = useFetchData('annoucements');

    useEffect(() => {
        const renderState = async () => {
            setData(data)
        }
        renderState()
    }, [data])


    const handleClick = () => {
        navigate('/createannouncement');
    };

    const handleIndex = (index) => {
        setDropIndex(dropIndex === index ? null : index);
    };

    const handleUpdate =  async (result, id) => {
        await handleAUpdate(result, id);
        
    };
    
    const handleDelete = async (value) => {
        await deleteData('annoucements', value);
        setFetchTrigger(prev => prev + 1);
    }

    const getContent = () => {
        return Object.entries(updatedData).map(([key, result], index) => {
            return (
                <div className="announcement box" key={key}>
                    {dropIndex === index ? (
                        <>
                            {isEdit ? (
                                <>
                                    <h3>Edit Title</h3>
                                    <input
                                        className="edit-input"
                                        type="text"
                                        name="annouceTitle"
                                        value={value.annouceTitle || ''}
                                        onChange={handleChange}
                                    />
                                    <h3>Edit Description</h3>
                                    <textarea
                                        className="edit-input"
                                        type="text"
                                        name="annouceDesc"
                                        value={value.annouceDesc || ''}
                                        onChange={handleChange}
    
                                    />
                                    <button onClick={() => handleUpdate(value, result.id)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <h3>{result.annouceTitle}</h3>
                                    <p>{result.annouceDesc}</p>
                                </>
                            )}
                            <button onClick={() => handleIndex(index)}>Show Less</button>
                            {userInfo?.access === 'Admin' && (
                                <>
                                    {!isEdit ? <button onClick={() => handleEdit(result)}>Edit</button> : null}
                                    <button onClick={() => handleDelete(result)}>Delete</button>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <h3>{result.annouceTitle}</h3>
                            <button onClick={() => handleIndex(index)}>Show More</button>
                        </>
                    )}
                </div>
            );
        });
    };
    

    return (
        <div className="annouce-container" id="a">
            {userInfo?.access === 'Admin' ? (
                <button className="annouce-create-btn" onClick={handleClick}>New Announcement</button>
            ) : null}
            {getContent()}
        </div>
    );
}

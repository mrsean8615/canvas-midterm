import { useState } from "react";
import { useUpdateUser } from "./updateUser";

export const useEditButton = (initialValues = {}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(initialValues);
    const { handleUpdate, handleAnnounce } = useUpdateUser();

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleAUpdate = (updatedValue, Aid) => {
        setIsEdit(false);
        handleAnnounce(updatedValue, Aid);
    };

    const handleUserSave = (updatedValue) => {
        setIsEdit(false);
        handleUpdate(updatedValue);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value, 
        }));
    };

    return { isEdit, value, handleEdit, handleAUpdate, handleUserSave, handleChange };
};

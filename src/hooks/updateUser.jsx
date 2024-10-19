import { useApi } from "../api/apiV3";
import { useUserInfo } from "../context/TrackUser";

export const useUpdateUser = () => {
    const usersApi = useApi('users');
    const annApi = useApi('annoucements');    
    const { userInfo, updateUserInfo } = useUserInfo();
    

    const handleAnnounce = async (announcement, Aid) => {
        const id = Aid.toString()
        try {
            await annApi.update(id, {
                'annouceTitle': announcement.annouceTitle || '',
                'annouceDesc': announcement.annouceDesc || ''
            });

        } catch (error) {
            console.error("Failed to update announcement:", error);
        }
    };

    const handleUpdate = async (updatedData) => {
        try {
            await usersApi.update(userInfo.id, {
                'email': updatedData.email || userInfo.email,
                'password': userInfo.password, 
                'firstName': updatedData.firstName || userInfo.firstName,
                'lastName': updatedData.lastName || userInfo.lastName,
                'age': updatedData.age || userInfo.age,
                'access': userInfo.access 
            });

            updateUserInfo({
                ...userInfo,
                ...updatedData, 
            });
        } catch (error) {
            console.error("Failed to update user:", error);
        }
    };

    return { handleUpdate, handleAnnounce };
};

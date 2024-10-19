import { useApi } from "../api/apiV3";

export const useDelete = () => {
    const deleteData = async (type, data) => {
        const id = (data.id.toString());
        
        const ApiResponse = await useApi(type);
        await ApiResponse.delete(id);
        console.log(ApiResponse.getAll(type));
        
    };

    return deleteData;
};
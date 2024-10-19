import { useEffect, useState } from "react"
import { useApi } from "../api/apiV3";


export const useFetchData = (type) => {
    const usersApi = useApi(type)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await usersApi.getAll();
                setData(result);
            } catch(err) {
                console.error("Error", err)
            }
        }
    
        fetchData();
    }, []);

    return data
}   
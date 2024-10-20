import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

export const Modules = () => {
    const navigate = useNavigate();
    const [moddata, setData] = useState([]); 
    const data = useFetchData('modules'); // Assuming this hook fetches the data

    useEffect(() => {
        const fetchData = async () => {
            const result = await data;
            setData(result); 
        };
        fetchData();
    }, [data]);

    const handleNav = () => {
        navigate('/createmodules');
    };

    return (
        <>
            <button className="mod-btn" onClick={handleNav}>Create Module</button>
            {Object.entries(moddata).map(([key, result]) => (
                <div className="module box" key={key}>
                    <h3>{result.modTitle}</h3>
                    <p>{result.modDesc}</p>
                    <span>{result.modPage}</span>
                    <span>{result.modPub}</span>
                </div>
            ))}
        </>
    );
};

import { useEffect, useState } from "react";

// Docs: https://wiki.openopus.org/wiki/Using_the_Open_Opus_API
const useFetchWorks = (endpoint) => {
    // Inital data and current state
    const [musicApiData, setMusicApiData] = useState([]);
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            const response = null;
            const data = null;
        
            // Set initial data and current state to data
            setMusicApiData(data);
            setWorks(data);
        };

        getApiData();
    }, []);
    
    return [musicApiData, works, setWorks];
};

export default useFetchWorks;
import { useEffect, useState } from "react";

// Docs: https://wiki.openopus.org/wiki/Using_the_Open_Opus_API
const useFetchComposers = (endpoint) => {
    // Inital data and current state
    const [musicApiData, setMusicApiData] = useState([]);
    const [composers, setComposers] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            // Fetch each url from the array
            const response = await Promise.all(endpoint.map(url => fetch(url)));
            // Merge all returned composer objects into one composers array
            const data = (await Promise.all(response.map(res => res.json()))).reduce((prev, curr) => [...prev, ...curr.composers], []);
        
            // Set initial data and current state to data
            setMusicApiData(data);
            setComposers(data);
        };

        getApiData();
    }, []);
    
    return [musicApiData, composers, setComposers];
};

export default useFetchComposers;
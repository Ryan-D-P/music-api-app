import { useEffect, useState } from "react";

const useFetch = (epoch) => {
    const [musicApiData, setMusicApiData] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            // Docs: https://wiki.openopus.org/wiki/Using_the_Open_Opus_API
            let response, data;
        
            if (epoch === `Romantic`) {
                response = await Promise.all([
                    fetch(`https://api.openopus.org/composer/list/epoch/Early ${epoch}.json`),
                    fetch(`https://api.openopus.org/composer/list/epoch/${epoch}.json`),
                    fetch(`https://api.openopus.org/composer/list/epoch/Late ${epoch}.json`)
                ]);
                // Merge all returned composer objects into one composers array
                data = (await Promise.all(response.map(res => res.json()))).reduce((prev, curr) => [...prev, ...curr.composers], []);
            }
            else {
                response = await fetch(`https://api.openopus.org/composer/list/epoch/${epoch}.json`);
                data = (await response.json()).composers;
            }
        
            setMusicApiData(data);
        };

        getApiData();
    }, []);
    
    return [musicApiData];
};

export default useFetch;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Music = () => {
    const { epoch } = useParams();
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

    return (
        <div className="Music">
            <div className="flex flex-wrap justify-center">
                {
                    musicApiData.map(composer => (
                        <div className="Composer text-white m-5" key={ composer.id }>
                            <h2>{ composer.complete_name } ({ composer.epoch })</h2>
                            <img src={ composer.portrait } alt={ composer.name } />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Music;
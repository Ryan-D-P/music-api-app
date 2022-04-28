import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const Music = () => {
    const { epoch } = useParams();
    const [musicApiData] = useFetch(epoch);

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
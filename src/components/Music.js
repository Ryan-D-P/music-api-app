import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Search from "./Search";

const Music = () => {
    const { epoch } = useParams();
    const [musicApiData] = useFetch(epoch);

    return (
        <div className="Music pt-10">
            <Search />
            <div className="flex flex-wrap justify-center">
                {
                    musicApiData.map(composer => (
                        <div className="Composer text-white m-5 flex flex-col items-center" key={ composer.id }>
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
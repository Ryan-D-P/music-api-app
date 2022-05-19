import { useParams, Link } from "react-router-dom";
import useFetchComposers from "../hooks/useFetchComposers";
import Search from "./Search";

const Composers = () => {
    const { epoch } = useParams();

    // Fetch list of composers from epoch
    const base = `https://api.openopus.org/composer/list/epoch`;
    const enpoint = (epoch === `Romantic`) ? [`${base}/Early ${epoch}.json`, `${base}/${epoch}.json`, `${base}/Late ${epoch}.json`] : [`${base}/${epoch}.json`];
    const [musicApiData, composers, setComposers] = useFetchComposers(enpoint);

    return (
        <div className="Composers pt-10">
            <Search musicApiData={ musicApiData } setComposers={ setComposers } />
            <div className="flex flex-wrap justify-center">
                {
                    composers.map(composer => (
                        <Link 
                            to={ `/` }
                            className="Composer text-white m-5 flex flex-col items-center"
                            key={ composer.id }
                        >
                            <h2>{ composer.complete_name } ({ composer.epoch })</h2>
                            <img src={ composer.portrait } alt={ composer.name } />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Composers;
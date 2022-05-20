import { useParams, Link } from "react-router-dom";
import useFetchWorks from "../hooks/useFetchWorks";

const Works = () => {
    const { id } = useParams();

    // Fetch list of works from composer ID
    const [musicApiData, works, setWorks] = useFetchWorks(`https://api.openopus.org/work/list/composer/${id}/genre/all.json`);

    // If no works state set
    if (!works.works || works.works.length < 1) return null;

    return (
        <div className="Works">
            {
                works.works.map(( work ) => (
                    <div className="Work text-white" key={ work.id }>
                        <h2>{ work.title }</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default Works;
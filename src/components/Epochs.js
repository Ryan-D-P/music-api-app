import { Link } from "react-router-dom";
import StDenis from "../images/St.Denis.png";
import Raphael from "../images/Raphael.jpg";
import Gallery from "../images/Gallery.jpg";
import Pannini from "../images/Pannini.png";
import Moonrise from "../images/Moonrise.jpg";
import Nouveau from "../images/Nouveau.jpg";

function Epochs() {
    // Epochs of classical music returned by the music API
    const epochs = [
        {name: "Medieval", image: StDenis},
        {name: "Renaissance", image: Raphael},
        {name: "Baroque", image: Gallery},
        {name: "Classical", image: Pannini},
        {name: "Romantic", image: Moonrise},
        {name: "20th Century", image: Nouveau},
    ];

    return (
        <div className="Epochs">
            <div className="flex flex-wrap justify-center" id="epochsWrapper">

                {
                    epochs.map(epoch => (
                        <Link
                            to={ `/epoch/${epoch.name}` }
                            className="p-6 m-5 bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105"
                            key={ epoch.name }
                        >
                            <div className="relative min-w-[480px] min-h-[480px]">
                                <h2 className="text-white text-5xl font-semibold text-center absolute w-full h-full flex justify-center items-center bg-black/50">{ epoch.name }</h2>
                                <img src={ epoch.image } alt={ `${epoch.name}-img` } />
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}

export default Epochs;
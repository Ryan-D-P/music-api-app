import { useEffect, useState } from "react";
import StDenis from "./images/St.Denis.png";
import Raphael from "./images/Raphael.jpg";
import Gallery from "./images/Gallery.jpg";
import Pannini from "./images/Pannini.png";
import Moonrise from "./images/Moonrise.jpg";
import Nouveau from "./images/Nouveau.jpg";

function App() {
  // Returned classical music API data
  const [musicApiData, setMusicApiData] = useState([]);
  // Epochs of classical music returned by the music API
  const epochs = [
    {name: "Medieval", image: StDenis},
    {name: "Renaissance", image: Raphael},
    {name: "Baroque", image: Gallery},
    {name: "Classical", image: Pannini},
    {name: "Romantic", image: Moonrise},
    {name: "20th Century", image: Nouveau},
  ];

  useEffect(() => {
    const getApiData = async () => {
      // Docs: https://wiki.openopus.org/wiki/Using_the_Open_Opus_API
      const response = await fetch(`https://api.openopus.org/composer/list/pop.json`);
      const data = await response.json();

      setMusicApiData(data.composers);
    };

    getApiData();
  }, []);

  return (
    <div className="App bg-gray-900 min-h-screen">
      <div className="flex flex-wrap justify-center" id="epochsWrapper">

        {
          epochs.map(epoch => (
            <div className="p-6 m-5 bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105" key={ epoch.name }>
              <div className="relative min-w-[480px] min-h-[480px]">
                <h2 className="text-white text-5xl font-semibold text-center absolute w-full h-full flex justify-center items-center bg-black/50">{ epoch.name }</h2>
                <img src={ epoch.image } alt={ `${epoch.name}-img` } />
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
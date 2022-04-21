import { useEffect, useState } from "react";

function App() {
  const [musicApiData, setMusicApiData] = useState([]);

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
    <div className="App">
      <h1 className="text-4xl text-blue-600">Header text...</h1>
      <div className="flex flex-wrap justify-center" id="composersWrapper">

        {
          musicApiData.map(composer => (
            <div className="Composer p-6 m-5 bg-blue-400 rounded-lg text-white" key={ composer.id }>
              <h2 className="text-xl font-bold">{ composer.name }</h2>
              <img src={ composer.portrait } alt={ `composer-${composer.name}-profile` } />
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
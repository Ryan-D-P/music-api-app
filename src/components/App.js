import { BrowserRouter, Routes, Route } from "react-router-dom";
import Epochs from "./Epochs";
import Music from "./Music";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Epochs /> } />
          <Route exact path="/epoch/:epoch" element={ <Music /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
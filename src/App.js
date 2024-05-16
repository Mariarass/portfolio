import logo from "./logo.svg";
import "./App.css";
import MainScene from "./components/start-page/MainScene";
import LoaderComponent from "./components/common/loader/LoaderComponent";

import React, { Suspense, useEffect, useState } from "react";
import PortfolioPage from "./components/portfolio-page/PortfolioPage";
import { Route, Routes } from "react-router-dom";
import useSound from "use-sound";
import backAudio from "./assets/sounds/background.mp3";

function App() {
  const [play] = useSound(backAudio, { volume: 0.04, loop: true });

  const handleSound = () => {
    play();
  };
  return (
    <div className="App">
      {/*<div onClick={handleSound} >*/}
      {/*    sounds*/}
      {/*</div>*/}

      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;

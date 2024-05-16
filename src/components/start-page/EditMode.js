import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import s from "./StartPage.module.css";
import ChangePanel from "./ChangePanel";
import { OrbitControls } from "@react-three/drei";
import { FirstGirl } from "./models/FirstGirl";
import { SecondGirl } from "./models/SecondGril";
import { ThirdGirl } from "./models/ThirdGirl";

import first_img from "../../assets/firstGirl.jpg";
import second_img from "../../assets/secondGirl.png";
import third_img from "../../assets/thirdGirl.png";
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../common/loader/LoaderComponent";
import { setLocalStorage } from "../../scripts/helpers/localeStorage";
import useStore from "../../store/store";
import useSound from "use-sound";
import clickAudio from "../../assets/sounds/click.mp3";
import magicAudio from "../../assets/sounds/magic.mp3";

const EditMode = () => {
  const { currentGirl, setCurrentGirl, setIsEditMode } = useStore();
  const navigate = useNavigate();
  const [playClick] = useSound(clickAudio, { volume: 0.1 });
  const [playMagic] = useSound(magicAudio, { volume: 0.1 });

  const handleModelSelect = (modelName) => {
    playClick();
    setCurrentGirl(modelName);
  };

  const handleChoose = () => {
    playMagic();
    setIsEditMode(false);
    setLocalStorage("currentGirl", currentGirl);
  };

  return (
    <Suspense fallback={<LoaderComponent />}>
      <div className={s.startPage}>
        <div className={s.header}>
          <h3>edit your character</h3>
        </div>

        {/* <Canvas className='canvas' camera={{ position: [0, 0.5,3] }} style={{ height: '70vh', display: 'flex' }}>
                <ambientLight intensity={0} />
                <directionalLight position={[-5, 5, 2]} color="yellow" />
                <directionalLight position={[-70, 5, 50]} color="white" />
                <directionalLight position={[0, -40, 0]} color="white" />
                <directionalLight position={[10, 0, 0]} color="white" />
                <directionalLight position={[0, 2, 10]} color="white" />
                <directionalLight position={[0, 5, 2]} color="yellow" />
                <directionalLight position={[0, -2, -5]} color="white" />

                {currentGirl === 'firstGirl' &&<FirstGirl/>}
                {currentGirl === 'secondGirl' && <SecondGirl />}
                {currentGirl === 'thirdGirl' && <ThirdGirl />}

                <OrbitControls  minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2}  enableZoom={false}/>


            </Canvas>
            */}

        <div className={s.btn}>
          <span className={s.front} onClick={handleChoose}>
            Choose
          </span>
        </div>

        <div className={s.containerLeftPanel}>
          <img
            className={s.img}
            onClick={() => handleModelSelect("firstGirl")}
            src={first_img}
          />
          <img
            className={s.img}
            onClick={() => handleModelSelect("secondGirl")}
            src={second_img}
          />
          <img
            className={s.img}
            onClick={() => handleModelSelect("thirdGirl")}
            src={third_img}
          />
        </div>

        <ChangePanel girl={currentGirl} />
      </div>
    </Suspense>
  );
};

export default EditMode;

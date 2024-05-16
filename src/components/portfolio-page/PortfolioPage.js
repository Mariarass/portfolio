import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { FirstGirl } from "../start-page/models/FirstGirl";
import { SecondGirl } from "../start-page/models/SecondGril";
import { ThirdGirl } from "../start-page/models/ThirdGirl";

import useStore from "../../store/store";
import ModalWindow from "../common/modal/ModalWindow";
import MyProject from "../about-me/my-project/MyProject";
import MyExperience from "../about-me/my-experience/MyExperience";
import s from "./PortfolioPage.module.css";
import brush from "../../assets/brush-01.png";
import MySkills from "../about-me/my-skills/MySkills";
import MyContact from "../about-me/my-contact/MyContact";
import * as THREE from "three";
import {
  Clouds,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  Sky,
  Text3D,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Fog } from "three";
import ClueComponent from "../common/clue/ClueComponent";
import EditMode from "../start-page/EditMode";

const PortfolioPage = () => {
  const fogColor = 0x000000; // Цвет тумана (черный)
  const fogNear = 1; // Близость тумана
  const fogFar = 100; // Дальность тумана
  const fog = new Fog(fogColor, fogNear, fogFar);
  const navigate = useNavigate();
  const { currentGirl } = useStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState("experience");
  const [isTouched, setIsTouched] = useState(false);

  const { isEditMode, setIsEditMode } = useStore();

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSetPage = (page) => {
    setIsModalOpen(true);
    setPage(page);
  };

  const handleCollisionEnter = (e) => {
    if (e.colliderObject.name === "player") {
      setIsTouched(true);
    }
  };
  const handleCollisionExit = (e) => {
    setIsTouched(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(isTouched);
      if (e.key === "Enter" && isTouched) {
        console.log("hell");
        setPage("about");
        setIsModalOpen(true);
        setIsTouched(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTouched]);

  return (
    <div id="container">
      {!isEditMode && (
        <button onClick={handleEdit} className={s.edit}>
          <img src={brush} />
        </button>
      )}

      {isTouched && <ClueComponent />}

      <Canvas
        className="canvas"
        shadows
        style={{ height: "100vh", display: "flex", background: "pink" }}
      >
        <PerspectiveCamera
          makeDefault // Устанавливает камеру по умолчанию
          position={[0, -3, 10]} // Установка начальной позиции камеры
          fov={40} // Установка поля зрения
          aspect={window.innerWidth / window.innerHeight} // Установка соотношения сторон
          near={0.1} // Ближняя плоскость отсечения
          far={1000} // Дальняя плоскость отсечения
        />
        <fog attach="fog" color="pink" near={1} far={60} />
        {/*<PointerLockControls />*/}

        <ambientLight intensity={1.5} />
        <directionalLight castShadow intensity={0.8} position={[50, 10, 0]} />
        <Physics gravity={[0, -20, 0]}>
          <RigidBody
            onCollisionEnter={handleCollisionEnter}
            onCollisionExit={handleCollisionExit}
          >
            <Text3D
              position={[-4, -3, -3]}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.6}
              lineHeight={0.5}
              letterSpacing={0.05}
              size={0.7}
              font="/Inter_Bold.json"
              material={
                new THREE.MeshBasicMaterial({
                  color: isTouched ? "red" : "pink",
                })
              }
            >
              {`About`}
            </Text3D>
          </RigidBody>

          <Ground />
          <Player currentGirl={currentGirl} isEditMode={isEditMode} />

          {/*+\*/}
        </Physics>

        <ambientLight intensity={0} />
        <directionalLight position={[-5, 5, 2]} color="yellow" />
        <directionalLight position={[-70, 5, 50]} color="white" />
        <directionalLight position={[0, -40, 0]} color="white" />
        <directionalLight position={[10, 0, 0]} color="white" />
        <directionalLight position={[0, 2, 10]} color="white" />
        <directionalLight position={[0, 5, 2]} color="yellow" />
        <directionalLight position={[0, -2, -5]} color="white" />
        <planeGeometry attach="geometry" args={[1, 1]} />
        {/*<meshBasicMaterial attach="material" color={0xffff00} side={THREE.DoubleSide} />*/}

        {/*<mesh  position={[0, -1, 0]} rotation={[0, 0, 0]}>*/}
        {/*    <boxGeometry args={[10, 0.1, 10]} />*/}
        {/*    <meshBasicMaterial color={0xffff00} />*/}
        {/*</mesh>*/}
        {/*{currentGirl === 'firstGirl' && <FirstGirl />}*/}
        {/*{currentGirl === 'secondGirl' && <SecondGirl />}*/}
        {/*{currentGirl === 'thirdGirl' && <ThirdGirl />}*/}

        {/*<OrbitControls  minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2}  enableZoom={false}/>*/}
      </Canvas>
      {/*<button onClick={()=>handleSetPage('experience')}> open ecxperience</button>*/}
      {/*<button onClick={()=>handleSetPage('project')}> open projeclt</button>*/}
      {/*<button onClick={()=>handleSetPage('skills')}> open skills</button>*/}
      {/*<button onClick={()=>handleSetPage('contact')}> open contact</button>*/}
      <ModalWindow
        isOpen={isModalOpen}
        setOpen={(value) => setIsModalOpen(value)}
      >
        {page === "about" && <MyContact />}
        {page === "experience" && <MyExperience />}
        {page === "project" && <MyProject />}
        {page === "skills" && <MySkills />}
        {page === "contact" && <MyContact />}
      </ModalWindow>
      {isEditMode && <EditMode />}
    </div>
  );
};

export default PortfolioPage;

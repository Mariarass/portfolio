import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Canvas} from "react-three-fiber";
import {FirstGirl} from "../StartPage/FirstGirl";
import {SecondGirl} from "../StartPage/SecondGril";
import {ThirdGirl} from "../StartPage/ThirdGirl";
import {OrbitControls} from "@react-three/drei";
import useStore from "../../store/store";
import ModalWindow from "../common/modal/ModalWindow";
import MyProject from "../MyProject/MyProject";

const PortfolioPage = () => {
    const navigate=useNavigate()
    const {currentGirl}=useStore()

    const [isModalOpen,setIsModalOpen]=useState(false)

    const handleEdit=()=>{
        navigate('/edit_mode')
    }


    return (
        <div>
            <button onClick={handleEdit}>edit character</button>
            <Canvas className='canvas' camera={{ position: [0, 0.5,3] }} style={{ height: '70vh', display: 'flex' }}>
                <ambientLight intensity={0} />
                <directionalLight position={[-5, 5, 2]} color="yellow" />
                <directionalLight position={[-70, 5, 50]} color="white" />
                <directionalLight position={[0, -40, 0]} color="white" />
                <directionalLight position={[10, 0, 0]} color="white" />
                <directionalLight position={[0, 2, 10]} color="white" />
                <directionalLight position={[0, 5, 2]} color="yellow" />
                <directionalLight position={[0, -2, -5]} color="white" />

                {/* Условно рендерим выбранную модель */}
                {currentGirl === 'firstGirl' &&<FirstGirl />}
                {currentGirl === 'secondGirl' && <SecondGirl />}
                {currentGirl === 'thirdGirl' && <ThirdGirl />}

                {/*<OrbitControls  minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2}  enableZoom={false}/>*/}
            </Canvas>
            <button onClick={()=>setIsModalOpen(true)}> open modal</button>
            <ModalWindow isOpen={isModalOpen}>
                <MyProject/>


            </ModalWindow>

        </div>
    );
};

export default PortfolioPage;

import * as THREE from "three";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { usePersonControls } from "../../scripts/hooks/usePersonalControl";
import { useFrame } from "@react-three/fiber";
import { FirstGirl } from "../start-page/models/FirstGirl";
import { useStore } from "zustand";
import { SecondGirl } from "../start-page/models/SecondGril";
import { ThirdGirl } from "../start-page/models/ThirdGirl";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export const Player = ({ currentGirl, isEditMode }) => {
  const playerRef = useRef();
  const objectInHandRef = useRef();

  const { forward, backward, left, right, jump } = usePersonControls();
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state) => {
    if (right === true) {
      setRotation([0, 1.6, 0]);
    }
    if (forward === true) {
      setRotation([0, 3, 0]);
    }
    if (left === true) {
      setRotation([0, 5, 0]);
    }
    if (backward === true) {
      setRotation([0, 0, 0]);
    }

    if (!playerRef.current) return;

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });
  });
  useEffect(() => {
    console.log("CHANGE EDIT MODE");
    setRotation([0, 0, 0]);
  }, [isEditMode]);

  return (
    <>
      <RigidBody colliders={false} mass={1} ref={playerRef} lockRotations>
        <mesh castShadow>
          {currentGirl === "firstGirl" && (
            <FirstGirl args={[0.1, 0.1]} rotation={rotation} />
          )}
          {currentGirl === "secondGirl" && (
            <SecondGirl args={[0.1, 0.1]} rotation={rotation} />
          )}
          {currentGirl === "thirdGirl" && (
            <ThirdGirl args={[0.1, 0.1]} rotation={rotation} />
          )}

          <CapsuleCollider
            ref={objectInHandRef}
            name={"player"}
            args={[0.1, 0.1]}
          />
        </mesh>
      </RigidBody>
      {/*<group >*/}
      {/*    <FirstGirl position={[0.3, -0.1, 0.3]} scale={0.3} />*/}
      {/*</group>*/}
    </>
  );
};

import {CuboidCollider, RigidBody} from "@react-three/rapier";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../../assets/floor.jpg";
export const Ground = () => {
    const texture = useTexture(floorTexture);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return (
        <RigidBody>
            <mesh name="ground" receiveShadow  position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[500, 500]} />
                <meshStandardMaterial color="white"  />
            </mesh>

        </RigidBody>
    );
}

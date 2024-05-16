/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Donte_Loves_Art (https://sketchfab.com/Donte_Loves_Art)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/princess-peach-64e1f34be9a24e23bb7a34d5b1a36e44
Title: Princess Peach
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useStore from "../../../store/store";
import { MeshStandardMaterial } from "three";

export function ThirdGirl(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/thirdGirl.gltf");
  const { actions } = useAnimations(animations, group);

  const { thirdGirlColors } = useStore();

  const hairMaterial =
    thirdGirlColors.hair != null
      ? new MeshStandardMaterial({ color: thirdGirlColors.hair })
      : materials.hair;
  const topMaterial =
    thirdGirlColors.top != null
      ? new MeshStandardMaterial({ color: thirdGirlColors.top })
      : materials.clothing;
  const pantsMaterial =
    thirdGirlColors.pants != null
      ? new MeshStandardMaterial({ color: thirdGirlColors.pants })
      : materials.clothing;

  useEffect(() => {
    Object.values(actions)[0].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.821}
        >
          <group
            name="ef3834366df14010ac7b3c8fe7c705a7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_80"
                      geometry={nodes.Object_80.geometry}
                      material={hairMaterial}
                      skeleton={nodes.Object_80.skeleton}
                    />
                    <skinnedMesh
                      name="Object_82"
                      geometry={nodes.Object_82.geometry}
                      material={materials.skin}
                      skeleton={nodes.Object_82.skeleton}
                    />
                    <skinnedMesh
                      name="Object_84"
                      geometry={nodes.Object_84.geometry}
                      material={materials.eyes}
                      skeleton={nodes.Object_84.skeleton}
                    />
                    <skinnedMesh
                      name="Object_86"
                      geometry={nodes.Object_86.geometry}
                      material={materials.crown}
                      skeleton={nodes.Object_86.skeleton}
                    />
                    <skinnedMesh
                      name="Object_88"
                      geometry={nodes.Object_88.geometry}
                      material={materials.crown}
                      skeleton={nodes.Object_88.skeleton}
                    />
                    <skinnedMesh
                      name="Object_90"
                      geometry={nodes.Object_90.geometry}
                      material={materials.clothing}
                      skeleton={nodes.Object_90.skeleton}
                    />
                    <skinnedMesh
                      name="Object_92"
                      geometry={nodes.Object_92.geometry}
                      material={materials.hair}
                      skeleton={nodes.Object_92.skeleton}
                    />
                    <skinnedMesh
                      name="Object_94"
                      geometry={nodes.Object_94.geometry}
                      material={materials.hair}
                      skeleton={nodes.Object_94.skeleton}
                    />
                    <skinnedMesh
                      name="Object_96"
                      geometry={nodes.Object_96.geometry}
                      material={topMaterial}
                      skeleton={nodes.Object_96.skeleton}
                    />
                    <skinnedMesh
                      name="Object_98"
                      geometry={nodes.Object_98.geometry}
                      material={pantsMaterial}
                      skeleton={nodes.Object_98.skeleton}
                    />
                    <skinnedMesh
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={materials.clothing}
                      skeleton={nodes.Object_100.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/thirdGirl.gltf");
// import { useSpring } from '@react-spring/three';
import { useEffect } from 'react';
import * as THREE from 'three';
import irisUrl from '../../img/iris.jpg';

const irisTexture = new THREE.TextureLoader().load(irisUrl);
interface Props {
	eyeHovered: boolean;
}
export default function Iris({ eyeHovered }: Props) {
	// const { scale } = useSpring({ scale: eyeHovered ? 0.5 : 1 });

	useEffect(() => {
		if (eyeHovered) {
			irisTexture.repeat.set(0.5, 0.5);
		} else {
			irisTexture.repeat.set(1, 1);
		}
	}, [eyeHovered]);

	return (
		<mesh position={[0, 0, 0.72]} scale={[1, 1, 0.4]}>
			<sphereBufferGeometry
				attach="geometry"
				args={[0.5, 32, 32, 0, 3]}
			/>
			<meshStandardMaterial
				attach="material"
				color="#777"
				// emissive="#444"
				bumpMap={irisTexture}
				// map={irisTexture}
				bumpScale={0.005}
			/>
		</mesh>
	);
}

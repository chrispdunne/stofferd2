import * as THREE from 'three';
import veinUrl from '../../img/veins.jpg';
import veinRedUrl from '../../img/veins-red.jpg';

import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';
import { RepeatWrapping, UVMapping } from 'three';

const veinTexture = new THREE.TextureLoader().load(veinUrl);
const redVeinTexture = new THREE.TextureLoader().load(veinRedUrl);

const normalMap = new THREE.CanvasTexture(
	new FlakesTexture(),
	UVMapping,
	RepeatWrapping,
	RepeatWrapping
);
const normalScale = new THREE.Vector2(0.02, 0.02);

export default function EyeBall() {
	return (
		<mesh>
			<sphereBufferGeometry attach="geometry" args={[0.9, 32, 32]} />
			{/* <meshStandardMaterial
				attach="material"
				color="#fff"
				map={veinTexture}
			/> */}
			<meshPhysicalMaterial
				color="#666"
				clearcoat={1}
				metalness={0.6}
				roughness={0.1}
				map={redVeinTexture}
				normalMap={normalMap}
				normalScale={normalScale}
			/>
		</mesh>
	);
}

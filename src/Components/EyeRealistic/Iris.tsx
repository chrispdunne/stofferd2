import * as THREE from 'three';
import sunUrl from '../../img/sun-texture.jpg';

const sunTexture = new THREE.TextureLoader().load(sunUrl);

export default function Iris() {
	return (
		<mesh position={[0, 0, 0.72]} scale={[1, 1, 0.4]}>
			<sphereBufferGeometry
				attach="geometry"
				args={[0.5, 32, 32, 0, 3]}
			/>
			<meshStandardMaterial
				attach="material"
				color="#222"
				// emissive="#444"
				// bumpMap={sunTexture}
			/>
		</mesh>
	);
}

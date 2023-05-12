import * as THREE from 'three';
import veinUrl from '../../img/veins.jpg';

const veinTexture = new THREE.TextureLoader().load(veinUrl);

export default function EyeBall() {
	return (
		<mesh>
			<sphereBufferGeometry attach="geometry" args={[0.9, 32, 32]} />
			<meshStandardMaterial
				attach="material"
				color="#fff"
				map={veinTexture}
			/>
		</mesh>
	);
}

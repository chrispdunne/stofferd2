import { animated, useSpring } from '@react-spring/three';
import * as THREE from 'three';
import { defaultConfig } from '.';

interface Props {
	eyeHovered: boolean;
}

export default function Pupil({ eyeHovered }: Props) {
	const { scale } = useSpring({
		scale: eyeHovered ? 0.6 : 1,
		config: defaultConfig
	});
	return (
		<animated.mesh
			position={[0, 0, 0.92]}
			rotation={[0, 0, 0]}
			scale={scale}
		>
			<circleBufferGeometry attach="geometry" args={[0.2, 32]} />
			<meshStandardMaterial
				attach="material"
				color="#000"
				side={THREE.DoubleSide}
			/>
		</animated.mesh>
	);
}

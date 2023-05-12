import { animated } from '@react-spring/three';
import useInitialScale from '../../hooks/useInitialScale';

interface Props {
	color: string;
	rotation: any;
}

export default function Lid({ color, rotation }: Props) {
	const scale = useInitialScale(1000);
	return (
		<animated.mesh position={[0, 0, 0]} rotation={rotation} scale={scale}>
			<sphereBufferGeometry
				attach="geometry"
				args={[1, 32, 32, 1.6, 3]}
			/>
			<meshLambertMaterial attach="material" color={color} />
		</animated.mesh>
	);
}

// <meshLambertMaterial attach="material" color="#666" />
//     <meshLambertMaterial attach="material" color="#5a5a5a" />

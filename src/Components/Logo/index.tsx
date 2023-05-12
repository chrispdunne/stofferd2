import { useThree } from '@react-three/fiber';
import LogoPart from './LogoPart';
import { PerspectiveCamera } from 'three';
import { visibleHeightAtZDepth, visibleWidthAtZDepth } from '../../utils/3d';
import { useEffect, useMemo } from 'react';
import throttle from 'lodash.throttle';

const width = 0.5;
const depth = 0.4;
const height = 0.5;

interface Props {
	setLogoHovered: (hovered: boolean) => void;
}

export default function Logo({ setLogoHovered }: Props) {
	const { camera } = useThree();

	const heightInUnits = visibleHeightAtZDepth(0, camera as PerspectiveCamera);
	const widthInUnits = visibleWidthAtZDepth(0, camera as PerspectiveCamera);

	const mouseMove = useMemo(
		() =>
			throttle(({ x, y }: MouseEvent) => {
				const w = Number(window.innerWidth);
				const h = Number(window.innerHeight);
				const xTarget = w - w / 8;
				const yTarget = h / 8;

				if (x > xTarget && y < yTarget) {
					setLogoHovered(true);
				} else {
					setLogoHovered(false);
				}
			}, 100),
		[setLogoHovered]
	);

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove);
		return () => window.removeEventListener('mousemove', mouseMove);
	}, [mouseMove]);

	return (
		<group
			scale={0.25}
			position={[widthInUnits / 2 - 1, heightInUnits / 2 - 1, 0]}
		>
			<LogoPart
				position={[0.35, 3, 0]}
				args={[width * 2, height, depth]}
			/>
			<LogoPart position={[-0.4, 2.5, 0]} args={[width, height, depth]} />
			<LogoPart position={[0.6, 2, 0]} args={[width, height, depth]} />
			<LogoPart
				position={[-0.15, 1.5, 0]}
				args={[width * 2, height, depth]}
			/>

			<LogoPart
				position={[1.95, 3, 0]}
				args={[width * 2, height, depth]}
			/>
			<LogoPart
				position={[1.7, 2.25, 0]}
				args={[width, height * 2, depth]}
			/>
			<LogoPart
				position={[2.85, 2.25, 0]}
				args={[width, height * 2, depth]}
			/>
			<LogoPart
				position={[1.95, 1.5, 0]}
				args={[width * 2, height, depth]}
			/>
		</group>
	);
}

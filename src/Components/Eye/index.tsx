import { useEffect, useMemo, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import { Canvas } from '@react-three/fiber';
import Pupil from './Pupil';
import Iris from './Iris';
import EyeBall from './EyeBall';
import Effects from './Effects';
import Lid from './Lid';
import { animated, useSpring } from '@react-spring/three';
import { getCentredValue } from '../../utils/mouse';
import useInitialScale from '../../hooks/useInitialScale';
import { isMouseEvent } from '../../utils/typeGuards';

const lidOpen = [5, 0.00001, 1.56];
const bottomLidClosed = [3.15, 0.00001, 1.56];
const topLidClosed = [6.175, 0.00001, 1.56];

export const defaultConfig = {
	mass: 1,
	tension: 100,
	friction: 26
};

export default function Eye() {
	const [eyeHovered, _setEyeHovered] = useState(false);
	const setEyeHovered = (bool: boolean) => {
		_setEyeHovered(bool);
	};

	const scale = useInitialScale();

	const [springs, api] = useSpring(
		() => ({
			rotation: [0, 0],
			bottomLidRotation: lidOpen,
			topLidRotation: lidOpen,
			config: defaultConfig
		}),
		[]
	);

	api.start({
		rotation: [0, 0]
	});

	const onMouseMove = useMemo(
		() =>
			throttle((e: MouseEvent | TouchEvent) => {
				const isMouse = isMouseEvent(e);

				const width = window.innerWidth;
				const centerX = width / 2;
				const height = window.innerHeight;
				const centerY = height / 2;
				const x = isMouse ? e.x : e.touches[0].clientX;
				const y = isMouse ? e.y : e.touches[0].clientY;

				const newX = (x - centerX) / centerX;
				const newY = (y - centerY) / centerY;
				const distanceFromCenter = getCentredValue(newX, newY);
				api.start({
					rotation: [newX, newY],

					bottomLidRotation:
						distanceFromCenter < 0.2 ? bottomLidClosed : lidOpen,
					topLidRotation:
						distanceFromCenter < 0.2 ? topLidClosed : lidOpen
				});
			}, 20),
		[api]
	);

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('touchstart', onMouseMove as any);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('touchstart', onMouseMove as any);
		};
	}, [onMouseMove]);

	const lightRef = useRef(null);

	return (
		<Canvas style={{ backgroundColor: '#000', height: '100vh' }}>
			<ambientLight intensity={0.1} />
			<directionalLight
				ref={lightRef}
				color="#fff"
				position={[0.2, 0.2, 0.1]}
			/>

			<animated.group
				rotation={springs.rotation.to((x, y) => [y, x, 0]) as any}
				scale={scale}
				onPointerOver={() => setEyeHovered(true)}
				onPointerOut={() => setEyeHovered(false)}
			>
				<EyeBall />
				<Iris eyeHovered={eyeHovered} />
				<Pupil eyeHovered={eyeHovered} />
			</animated.group>

			<Lid color="#666" rotation={springs.bottomLidRotation as any} />
			<Lid color="#5a5a5a" rotation={springs.topLidRotation as any} />

			<Effects />
		</Canvas>
	);
}

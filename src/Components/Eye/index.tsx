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

const lidOpen = [5, 0.00001, 1.56];
const bottomLidClosed = [3.15, 0.00001, 1.56];
const topLidClosed = [6.175, 0.00001, 1.56];

export const defaultConfig = {
	mass: 1,
	tension: 100,
	friction: 26
};

export default function Eye() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const [eyeHovered, _setEyeHovered] = useState(false);
	const setEyeHovered = (bool: boolean) => {
		_setEyeHovered(bool);
	};
	const distanceFromCenter = getCentredValue(x, y);

	const scale = useInitialScale();

	const bottomLidRotation = useSpring({
		config: defaultConfig,
		rotation: distanceFromCenter < 0.2 ? bottomLidClosed : lidOpen
	});
	const topLidRotation = useSpring({
		config: defaultConfig,
		rotation: distanceFromCenter < 0.2 ? topLidClosed : lidOpen
	});

	const onMouseMove = useMemo(
		() =>
			throttle((e: MouseEvent) => {
				const width = window.innerWidth;
				const centerX = width / 2;
				const height = window.innerHeight;
				const centerY = height / 2;

				setX((e.x - centerX) / centerX);
				setY((e.y - centerY) / centerY);
			}, 20),
		[setX, setY]
	);

	const onDeviceOrientation = useMemo(
		() =>
			throttle((e: DeviceOrientationEvent) => {
				console.log({ e });
				const { beta, gamma } = e;
				setX((beta ?? 0) / 180);
				setY((gamma ?? 0) / 90);
			}, 20),
		[]
	);

	useEffect(() => {
		if (window?.DeviceOrientationEvent && 'ontouchstart' in window) {
			window.addEventListener('deviceorientation', onDeviceOrientation);
		} else {
			window.addEventListener('mousemove', onMouseMove);
		}

		return () => {
			if (window?.DeviceOrientationEvent && 'ontouchstart' in window) {
				window.removeEventListener(
					'deviceorientation',
					onDeviceOrientation
				);
			} else {
				window.removeEventListener('mousemove', onMouseMove);
			}
		};
	}, [onDeviceOrientation, onMouseMove]);
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
				rotation={[y, x, 0]}
				scale={scale}
				onPointerOver={() => setEyeHovered(true)}
				onPointerOut={() => setEyeHovered(false)}
			>
				<EyeBall />
				<Iris eyeHovered={eyeHovered} />
				<Pupil eyeHovered={eyeHovered} />
			</animated.group>

			<Lid
				color="#666"
				rotation={bottomLidRotation.rotation}
				// scale={scale}
			/>
			<Lid
				color="#5a5a5a"
				rotation={topLidRotation.rotation}
				// scale={scale}
			/>

			<Effects />
		</Canvas>
	);
}

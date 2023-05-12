import { useEffect, useMemo, useState } from 'react';
import throttle from 'lodash.throttle';
import { Canvas } from '@react-three/fiber';
import sunUrl from '../../img/sun-texture.jpg';
// import starsUrl from '../../img/stars-darker.jpg';

import * as THREE from 'three';
import Effects from './Effects';
import { animated, useSpring } from '@react-spring/three';
import { getCentredValue } from '../../utils/mouse';

const sunTexture = new THREE.TextureLoader().load(sunUrl);
// const starsTexture = new THREE.TextureLoader().load(starsUrl);

// const normalScale = new THREE.Vector2(1);

const Sky = () => {
	// const { scene } = useThree();
	// scene.background = starsTexture;
	return null;
};

const getPlanetScale = (x: number, y: number) => {
	const shrinkFactor = 4; // the higher this value, the lower the output
	const distanceFromCenter = getCentredValue(x, y);
	return 1 - distanceFromCenter / shrinkFactor;
};

export default function Planet() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [closeToCenter, setCloseToCenter] = useState(false);
	const distanceFromCenter = getCentredValue(x, y);
	const { moonScale } = useSpring({ moonScale: closeToCenter ? 0.2 : 0.01 });

	useEffect(() => {
		if (!closeToCenter && distanceFromCenter < 0.2) {
			setCloseToCenter(true);
		}
		if (closeToCenter && distanceFromCenter >= 0.2) {
			setCloseToCenter(false);
		}
	}, [closeToCenter, distanceFromCenter]);

	useEffect(() => {
		if (closeToCenter) {
			console.log('CLOSE!');
		} else {
			console.log('far');
		}
	}, [closeToCenter]);

	const onMouseMove = useMemo(
		() =>
			throttle((e: MouseEvent) => {
				const width = window.innerWidth;
				const centerX = width / 2;
				const height = window.innerHeight;
				const centerY = height / 2;

				setX((e.x - centerX) / centerX);
				setY((e.y - centerY) / centerY);
			}, 10),
		[]
	);

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, [onMouseMove]);

	return (
		<Canvas
			style={{
				// backgroundColor: '#000',
				height: '100vh',
				// backgroundImage: 'url(' + starsUrl + ')',
				backdropFilter: 'brightness(0.1)',
				backgroundPosition: x * -5 + 'px ' + y * -5 + 'px'
			}}
		>
			<Sky />
			{/* <ambientLight intensity={0.1} /> */}
			<directionalLight color="#faa" position={[0.2, 0.2, -0.1]} />

			<group rotation={[y, x, 0]}>
				<mesh>
					<sphereBufferGeometry
						attach="geometry"
						args={[0.9 * getPlanetScale(x, y), 32, 32]}
					/>
					<meshPhongMaterial
						attach="material"
						color="#fff"
						emissive="#211"
						opacity={0.1}
						bumpMap={sunTexture}
						bumpScale={0.01}
					/>
				</mesh>
				<animated.mesh scale={moonScale} position={[1, 0, 0]}>
					<sphereBufferGeometry
						attach="geometry"
						args={[1, 32, 32]}
					/>
					<meshPhongMaterial
						attach="material"
						color="#fff"
						emissive="#0f0"
						opacity={0.1}
						bumpMap={sunTexture}
						bumpScale={0.01}
					/>
				</animated.mesh>
				<Effects />
			</group>
		</Canvas>
	);
}

import { easings, useSpring } from '@react-spring/three';

const config = {
	// mass: 1,
	// tension: 100,
	// friction: 26,
	duration: 1000,
	easing: easings.easeInOutCubic
};

export default function useInitialScale(delay?: number) {
	const { scale } = useSpring({
		config,
		from: { scale: 0.0001 },
		to: { scale: 1 },
		delay: delay ?? 0
	});
	return scale;
}

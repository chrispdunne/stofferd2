import {
	Bloom,
	DepthOfField,
	DotScreen,
	EffectComposer,
	Noise,
	Vignette
} from '@react-three/postprocessing';

export default function Effects() {
	return (
		<EffectComposer>
			{/* <DepthOfField
				focusDistance={0}
				focalLength={0.02}
				bokehScale={10}
				height={600}
			/> */}
			<Bloom
				luminanceThreshold={-1}
				luminanceSmoothing={0.1}
				height={600}
			/>
			<DotScreen angle={2} opacity={1} scale={256} />
			<Noise opacity={1} />
			{/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
		</EffectComposer>
	);
}

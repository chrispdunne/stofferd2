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
				luminanceThreshold={0.1}
				luminanceSmoothing={0.1}
				height={600}
			/>
			{/* <DotScreen angle={180} opacity={0.1} scale={5} /> */}
			{/* <Noise opacity={1} /> */}
			{/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
		</EffectComposer>
	);
}

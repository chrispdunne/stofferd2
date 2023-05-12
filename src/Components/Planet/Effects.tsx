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
			{/* <DepthOfField focusDistance={-0.01} bokehScale={5} /> */}
			<Bloom
				luminanceThreshold={-1}
				luminanceSmoothing={1}
				height={600}
			/>
			{/* <DotScreen angle={180} opacity={0.1} scale={1} /> */}
			<Noise opacity={0.2} />
			{/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
		</EffectComposer>
	);
}

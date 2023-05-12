import {
	Bloom,
	DepthOfField,
	DotScreen,
	EffectComposer,
	Noise,
	Vignette,
	ChromaticAberration,
	Glitch,
	GodRays,
	Pixelation,
	ShockWave,
	SelectiveBloom,
	Outline
} from '@react-three/postprocessing';
import { BufferGeometry, Material, Mesh, Vector2 } from 'three';

interface Props {
	light: Mesh<BufferGeometry, Material | Material[]> | null;
}

export default function EffectsAlt({ light }: Props) {
	return (
		<EffectComposer>
			{/* <DepthOfField
				focusDistance={0}
				focalLength={0.02}
				bokehScale={10}
				height={600}
			/> */}
			{/* <ChromaticAberration /> */}
			{light != null ? <GodRays sun={light} /> : <>NO LIGHT</>}
			{/* <Glitch strength={new Vector2(0.05, 0.05)} /> */}
			{/* <Bloom
				luminanceThreshold={-1}
				luminanceSmoothing={1}
				height={500}
			/> */}
			{/* <DotScreen angle={180} opacity={0.1} scale={5} /> */}
			{/* <Noise opacity={1} /> */}
			{/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
		</EffectComposer>
	);
}

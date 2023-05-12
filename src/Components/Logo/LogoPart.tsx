interface Props {
	position: [number, number, number];
	args: [number, number, number];
}
export default function LogoPart({ args, position }: Props) {
	return (
		<mesh position={position}>
			<boxBufferGeometry attach="geometry" args={args} />
			<meshLambertMaterial attach="material" color={'#fff'} />
		</mesh>
	);
}

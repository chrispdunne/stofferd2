import { logoPixels } from '../../const/logo';
import { Grid } from './styles';

interface Props {
	background?: string;
}

export default function Logo2d({ background = '#fff' }: Props) {
	const style = { background };

	return (
		<Grid className="logo-grid">
			{logoPixels.map((pixel: string, i: number) => (
				<div key={i} className={pixel} style={style} />
			))}
		</Grid>
	);
}

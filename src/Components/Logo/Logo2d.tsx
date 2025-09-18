import { useLocation } from 'react-router-dom';
import { logoPixels } from '../../const/logo';
import { Grid } from './styles';

interface Logo2dProps {
	background?: string;
}
interface HeaderElementProps {
	isHomePage?: boolean;
	children: React.ReactNode;
	style?: React.CSSProperties;
}

function HeaderElement({ isHomePage, children, style }: HeaderElementProps) {
	return isHomePage ? (
		<h1 style={style}>{children}</h1>
	) : (
		<h2 style={style}>{children}</h2>
	);
}

export default function Logo2d({ background = '#fff' }: Logo2dProps) {
	const style = { background };
	const { pathname } = useLocation();
	const isHomePage = pathname === '/';
	return (
		<HeaderElement isHomePage={isHomePage} style={{ fontSize: 'inherit' }}>
			<span className="sr-only">Chris Dunne</span>
			<Grid className="logo-grid">
				{logoPixels.map((pixel: string, i: number) => (
					<div key={i} className={pixel} style={style} />
				))}
			</Grid>
		</HeaderElement>
	);
}

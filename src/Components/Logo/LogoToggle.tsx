import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Logo2d from './Logo2d';
import { LogoToggl } from './styles';

type Props = {
	className?: string;
	mobNavVis: boolean;
	setMobNavVis: (v: boolean) => void;
};

const LogoToggle = ({ className = '', mobNavVis, setMobNavVis }: Props) => {
	return (
		<LogoToggl className={className}>
			<Toggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />

			<Link to="/" className="logo">
				<Logo2d />
			</Link>
		</LogoToggl>
	);
};

export default LogoToggle;

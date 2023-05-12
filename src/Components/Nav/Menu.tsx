import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { EyeBallGlow, MenuContainer } from './styles';

type Props = {
	className?: string;
	mobNavVis?: boolean;
};

const Menu = ({ className = '', mobNavVis }: Props) => {
	const links: string[] = ['about', 'work', 'contact'];
	return (
		<MenuContainer>
			<ul className={className + ' nav'}>
				{links.map((path, i) => (
					<li key={i} id={path} className="nav-link">
						<Link to={`/${path}`}>
							{path.split('').map((letter, i) => (
								<Fragment key={`letter-${i}`}>
									<span>{letter}</span>
								</Fragment>
							))}
						</Link>
					</li>
				))}
			</ul>
			<EyeBallGlow className={mobNavVis ? 'grown' : 'shrunk'} />
		</MenuContainer>
	);
};

export default Menu;

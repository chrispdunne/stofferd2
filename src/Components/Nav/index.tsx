import classNames from 'classnames';
import LogoToggle from '../Logo/LogoToggle';
import { useState } from 'react';
import { StyledNav } from './styles';
import Menu from './Menu';

type Props = {
	fixed?: boolean;
	white?: boolean;
	double?: boolean;
};

function Nav({ fixed, white, double }: Props) {
	const [mobNavVis, setMobNavVis] = useState(false);

	return (
		<StyledNav
			id="nav"
			className={classNames({ active: mobNavVis, fixed, white })}
		>
			<LogoToggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />

			<Menu mobNavVis={mobNavVis} className="white main" />
			{double && <Menu mobNavVis={mobNavVis} className="black main" />}
		</StyledNav>
	);
}

export default Nav;

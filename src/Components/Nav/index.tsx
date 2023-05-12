import classNames from 'classnames';
// import Menu from './Menu';
import LogoToggle from '../Logo/LogoToggle';
import { useCallback, useEffect, useState } from 'react';
import { StyledNav } from './styles';
import Menu from './Menu';

type Props = {
	fixed?: boolean;
	white?: boolean;
};

function Nav({ fixed, white }: Props) {
	// let scrollTop = 0;
	// const [scrollingUp, setScrollingUp] = useState(false);
	const [mobNavVis, setMobNavVis] = useState(false);
	// const handleScroll = useCallback(e => {
	// 	if (!window) return;
	// 	if (window.scrollY < scrollTop && window.scrollY > 300) {
	// 		requestAnimationFrame(() => setScrollingUp(true));
	// 	} else {
	// 		requestAnimationFrame(() => setScrollingUp(false));
	// 	}

	// 	scrollTop = window.scrollY;
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	return (
		<StyledNav
			id="nav"
			className={classNames({ active: mobNavVis, fixed, white })}
		>
			<LogoToggle mobNavVis={mobNavVis} setMobNavVis={setMobNavVis} />

			<Menu className="main" mobNavVis={mobNavVis} />
		</StyledNav>
	);
}

export default Nav;

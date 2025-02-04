import { Link } from 'react-router-dom';
import Eye from '../Eye';
import { IntroContainer, IntroSubtitle, IntroTitle } from './styles';

export default function Intro() {
	return (
		<>
			<IntroContainer>
				<IntroSubtitle>React, TypeScript, Node, C#</IntroSubtitle>
				<IntroTitle>Full stack developer</IntroTitle>
				<Link className="btn" to="/about">
					Find out more
				</Link>
			</IntroContainer>
			<Eye />
		</>
	);
}

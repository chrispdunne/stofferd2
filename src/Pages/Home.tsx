import Eye from '../Components/Eye';
import Nav from '../Components/Nav';
import NextSectionButton from '../Components/Buttons/NextSectionButton';
import BackToTopButton from '../Components/Buttons/BackToTopButton';
import sandp from '../work/sandp/logo.png';
import ey from '../work/ey/logo.png';
import firm from '../work/firm/logo.png';
import {
	FullHeightSection,
	WorkLogo,
	WorkOverview,
	WorkSubtitle,
	WorkTitle
} from './styles';
import { Link } from 'react-router-dom';
import Intro from '../Components/Intro';

export default function Home() {
	return (
		<>
			<Nav double />
			<Intro />

			<NextSectionButton white target="s_and_p" />

			<FullHeightSection id="s_and_p" white>
				<WorkLogo to="/work/sandp">
					<img src={sandp} alt="S&P Global" />
				</WorkLogo>
				<WorkOverview white>
					<WorkSubtitle>React, TypeScript, C#</WorkSubtitle>
					<WorkTitle>S&P</WorkTitle>
					<Link className="btn" to="/work/sandp">
						Find out more
					</Link>
				</WorkOverview>
				<NextSectionButton target="ey" />
			</FullHeightSection>

			<FullHeightSection id="ey">
				<WorkLogo to="/work/ey">
					<img src={ey} alt="Ernst & Young" />
				</WorkLogo>
				<WorkOverview>
					<WorkSubtitle>React, TypeScript, GraphQL</WorkSubtitle>
					<WorkTitle>Ernst & Young</WorkTitle>
					<Link className="btn" to="/work/ey">
						Find out more
					</Link>
				</WorkOverview>
				<NextSectionButton target="firm" white />
			</FullHeightSection>

			<FullHeightSection id="firm" white>
				<WorkLogo to="/work/firm">
					<img src={firm} alt="The Firm" />
				</WorkLogo>
				<WorkOverview white>
					<WorkSubtitle>React, GraphQl, WordPress</WorkSubtitle>
					<WorkTitle>The Firm</WorkTitle>
					<Link className="btn" to="/work/firm">
						Find out more
					</Link>
				</WorkOverview>

				<BackToTopButton />
			</FullHeightSection>
		</>
	);
}

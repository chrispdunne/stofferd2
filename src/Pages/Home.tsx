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

export default function Home() {
	return (
		<>
			<Nav />
			<Eye />
			<NextSectionButton white target="s_and_p" />

			<FullHeightSection id="s_and_p" white>
				<WorkLogo src={sandp} alt="S&P Global" />
				<WorkOverview white>
					<WorkSubtitle>React, TypeScript, C#</WorkSubtitle>
					<WorkTitle>S&P</WorkTitle>
					<button className="btn">Find out more</button>
				</WorkOverview>
				<NextSectionButton target="ey" />
			</FullHeightSection>

			<FullHeightSection id="ey">
				<WorkLogo src={ey} alt="Ernst & Young" />
				<WorkOverview>
					<WorkSubtitle>React, TypeScript, GraphQL</WorkSubtitle>
					<WorkTitle>Ernst & Young</WorkTitle>
					<button className="btn">Find out more</button>
				</WorkOverview>
				<NextSectionButton target="firm" white />
			</FullHeightSection>

			<FullHeightSection id="firm" white>
				<WorkLogo src={firm} alt="The Firm" />
				<WorkOverview white>
					<WorkSubtitle>React, GraphQl, WordPress</WorkSubtitle>
					<WorkTitle>The Firm</WorkTitle>
					<button className="btn">Find out more</button>
				</WorkOverview>

				<BackToTopButton />
			</FullHeightSection>
		</>
	);
}

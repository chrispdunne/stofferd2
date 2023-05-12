import styled from 'styled-components';
import Eye from '../Components/Eye';
import Nav from '../Components/Nav';
import NextSectionButton from '../Components/Buttons/NextSectionButton';
import BackToTopButton from '../Components/Buttons/BackToTopButton';

interface FullHeightSectionProps {
	white?: boolean;
}
const FullHeightSection = styled.section<FullHeightSectionProps>`
	height: 100vh;
	background-color: ${props => (props.white ? 'white' : 'black')};
	position: relative;
`;

export default function Home() {
	return (
		<>
			<Nav />
			<Eye />
			<NextSectionButton white target="nike" />
			<FullHeightSection id="nike" white>
				<NextSectionButton target="sandp" />
			</FullHeightSection>
			<FullHeightSection id="sandp">
				<BackToTopButton white />
			</FullHeightSection>
		</>
	);
}

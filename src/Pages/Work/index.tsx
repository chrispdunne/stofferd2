import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav';
import { FullHeightSection } from '../styles';
import sandp from '../../work/sandp/logo-white.png';
import ey from '../../work/ey/logo.png';
import firm from '../../work/firm/logo-white.png';
import styled from 'styled-components';

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(100vw - 200px);
`;

const Img = styled.img`
	max-width: 220px;
	max-height: 150px;
`;

export default function Work() {
	return (
		<>
			<Nav />
			<FullHeightSection>
				<ImgContainer>
					<Link to="/work/sandp">
						<Img src={sandp} alt="S&P Global" />
					</Link>
					<Link to="/work/ey">
						<Img src={ey} alt="Ernst & Young" />
					</Link>
					<Link to="/work/firm">
						<Img src={firm} alt="The Firm" />
					</Link>
				</ImgContainer>
			</FullHeightSection>
		</>
	);
}

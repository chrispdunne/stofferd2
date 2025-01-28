import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav';
import sandp from '../../work/sandp/logo-white.png';
import ey from '../../work/ey/logo.png';
import firm from '../../work/firm/logo-white.png';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #000000;
	height: 100vh;
`;

const ImgContainer = styled.div`
	display: flex;
	gap: 50px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100%;
	position: relative;
	z-index: 1;
	@media only screen and (min-width: 61.25em) {
		gap: 100px;
		flex-direction: row;
		width: calc(100vw - 200px);
	}
`;

const Img = styled.img`
	max-width: 110px;
	max-height: 75px;
`;

export default function Work() {
	return (
		<Container>
			<Nav />

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
		</Container>
	);
}

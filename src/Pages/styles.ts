import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
interface WhiteProps {
	white?: boolean;
}

export const FullHeightSection = styled.section<WhiteProps>`
	height: 100vh;
	background-color: ${props => (props.white ? 'white' : 'black')};
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
`;

export const WorkLogo = styled(Link)`
	grid-column: 2 / 3;
	justify-self: center;
	img {
		max-width: 300px;
	}
`;

export const WorkOverview = styled.div<WhiteProps>`
	justify-self: ${({ white }) => (white ? 'end' : 'start')};
	z-index: 5;
	position: relative;
	${({ white }) =>
		white
			? css`
					text-align: right;
					margin-right: 50px;
					.btn {
						color: #000;
						border-color: #000;
						&:before {
							background: #000;
						}
						&:hover {
							color: #fff;
						}
					}
			  `
			: css`
					color: #fff;
					margin-left: 50px;
					grid-column: 1 / 2;
					grid-row: 1 / 2;
					justify-self: start;
			  `};
`;

export const WorkTitle = styled.h2`
	font-size: 2rem;
	text-transform: uppercase;
	margin: 0 0 24px;
`;
export const WorkSubtitle = styled.h3`
	text-transform: uppercase;
	font-size: 0.9rem;
	margin-bottom: 6px;
`;

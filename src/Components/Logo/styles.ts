import styled from 'styled-components';

export const Grid = styled.div`
	width: 7rem;
	margin: 0;
	padding: 0;
	line-height: 0.7;
	transition: all 0.2s ease-out;
	div {
		margin: 0;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		transition: all 0.2s ease-in-out;
		box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
		background: #f7f7f7;
		/* &:nth-child(8n + 1) {
			transition-delay: 0.05s;
		}
		&:nth-child(8n + 3) {
			transition-delay: 0.075s;
		}
		&:nth-child(8n + 2) {
			transition-delay: 0.1s;
		}
		&:nth-child(8n + 4) {
			transition-delay: 0.15s;
		}
		&:nth-child(8n + 6) {
			transition-delay: 0.175s;
		} */
	}
	.empty {
		opacity: 0;
	}

	/* 979px */
	@media only screen and (max-width: 61.1875em) {
		width: 3.0625rem;
		line-height: 0;

		div {
			width: 0.4375rem;
			height: 0.4375rem;
		}
	}
	@media only screen and (min-width: 61.25em) {
		&:hover {
			opacity: 1;
			.fill {
				transform: matrix3d(
					1,
					1,
					0,
					-0.2,
					0,
					1,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					1
				);
				/* border: 0.5rem solid black;
				box-sizing: border-box;
				border-left-color: transparent; */
			}
		}
	}
`;

export const LogoToggl = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	&.fixed {
		position: fixed;
		background-color: #000;
		z-index: 4;
		top: -10rem;
		transition: top 0.3s ease-in-out;
		&.visible {
			top: 0rem;
		}
	}
`;

export const Toggl = styled.button`
	width: 6.5rem;
	appearance: none;
	background: transparent;
	/* position: absolute; */
	z-index: 5;
	left: 2rem;
	top: 2rem;
	border: 0;
	cursor: pointer;
	padding: 0 2rem;
	&:focus {
		outline: 0;
	}
	div {
		height: 0.35rem;
		margin-bottom: 0.35rem;
		transition: all 0.3s ease-in-out;
		&:last-child {
			margin: 0;
		}
	}
	&.mobNavVis {
		.piece1 {
			transform: rotate(45deg);
			top: 0.7rem;
			position: relative;
		}
		.piece2 {
			transform: scaleX(0);
		}
		.piece3 {
			transform: rotate(-45deg);
			top: -0.7rem;
			position: relative;
		}
	}
`;

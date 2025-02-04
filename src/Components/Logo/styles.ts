import styled from 'styled-components';

export const Grid = styled.div`
	width: 7rem;
	margin: 0;
	padding: 0;
	line-height: 0.7;
	transition: all 0.2s ease-in-out;
	div {
		margin: 0;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		transition: all 0.2s ease-in-out;
		box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
		background: #f7f7f7;
		box-sizing: border-box;
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
		div {
			border-top: 8px solid transparent;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid transparent;
		}
		&:hover {
			div {
				border-left-color: black;
				border-bottom-color: black;
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
	z-index: 10;
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

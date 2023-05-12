import styled from 'styled-components';

export const StyledNav = styled.div`
	a {
		color: #000;
	}
	&.fixed {
		position: fixed;
		width: 100%;
		z-index: 1;
	}
	.white {
		right: 0;
		left: initial;

		a {
			span {
				color: #fff;
			}
			&:visited {
				color: #fff;
				span {
					color: #fff;
				}
			}
		}
		li {
			text-align: right;
		}
	}
	ul {
		position: fixed;
		z-index: 2;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		padding: 0;
	}
	li {
		list-style-type: none;
		text-align: left;
	}
	a {
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
		font-size: 20px;
		padding: 1rem 3rem;
		display: inline-block;
	}
	.nav-link {
		span {
			display: inline-block;
			transition: transform 0.3s ease-in-out;
		}
		&:hover {
			span:nth-child(odd) {
				transform: rotate(15deg);
			}
			span:nth-child(even) {
				transform: rotate(-15deg);
			}
		}
	}
	.logo {
		position: fixed;
		z-index: 1;
		right: 0;
		top: 2rem;
	}
	.logo__img {
		max-width: 6rem;
	}
	.reverse {
		.logo:hover > div {
			background: #fff;
		}
		.logo,
		ul {
			left: 0;
			right: initial;
		}
		ul {
			padding: 0;
		}
		li {
			text-align: left;
		}
		a {
			color: blue;
		}
	}
	/* 979px */
	@media only screen and (max-width: 61.1875em) {
		ul.main {
			left: -120vw;
			transition: left 0.3s ease-in;
			z-index: 4;
			max-width: 100vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 0;
			top: 50%;
			transform: translateY(-50%);
		}
		&.active {
			z-index: 4;
			ul.main {
				left: 0;
			}
		}
		.logo {
			position: static;
			padding: 2rem;
		}
	}
`;

export const MenuContainer = styled.div`
	overflow: hidden;
	position: absolute;
	height: 100vh;
	width: 100%;
`;

export const EyeBallGlow = styled.div`
	position: absolute;
	z-index: 3;
	top: calc(40% - 70px);
	left: calc(50% - 70px);
	transform: translateX(-50%) translateY(-50%);
	background: rgba(0, 0, 0, 0.9);
	width: 0;
	height: 0;
	border-radius: 100%;
	transition: all 0.5s ease-out 0.3s;
	&.grown {
		width: 100rem;
		height: 100rem;
	}
`;

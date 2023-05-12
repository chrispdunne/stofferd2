import styled from 'styled-components';

export const RayBlast = styled.span`
	position: absolute;
	opacity: 0;
	transition: all 0.3s ease-in-out;
	z-index: -1;
`;

export const StyledNav = styled.div`
	&.fixed {
		position: fixed;
		width: 100%;
		z-index: 1;
	}
	&.white {
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
	}
	ul {
		position: fixed;
		z-index: 2;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	li {
		list-style-type: none;
		text-align: right;
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
			/* transition: all 0.25s ease-in-out; */
		}
		&:hover {
			${RayBlast} {
				opacity: 0.4;
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

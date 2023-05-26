import styled from 'styled-components';

export const Container = styled.div`
	background-color: #000000;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
`;

export const PageTitle = styled.h1``;
export const Status = styled.div`
	text-align: center;
`;

export const Form = styled.form`
	width: 450px;

	/* 979px */
	@media only screen and (max-width: 61.1875em) {
		width: calc(100% - 40px);
	}

	label {
		display: block;
		font-size: 0.8rem;
		text-transform: uppercase;
		margin: 2rem auto 3rem;
		font-weight: bold;
		text-align: left;
		span {
			display: block;
		}
		input,
		textarea {
			margin: 0;
			display: block;
			width: 100%;
			font-family: 'g', sans-serif;
			font-size: 1.5rem;
			background: transparent;
			border: 0;
			border-bottom: 1px solid #fff;
			color: #fff;
			position: relative;
			top: -0.3rem;
			padding: 0.75rem 0;
			&:focus {
				outline: 0;
			}
			&:-webkit-autofill,
			&:-webkit-autofill:focus {
				transition: background-color 600000s 0s, color 600000s 0s;
			}
		}
		textarea {
			height: 10rem;
		}
	}
	button {
		display: block;
		margin: auto;
	}
	.phone {
		display: none;
	}
`;

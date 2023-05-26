import styled from 'styled-components';

export const Status = styled.div`
	text-align: center;
`;

export const Form = styled.form`
	label {
		display: block;
		font-size: 0.8rem;
		text-transform: uppercase;
		margin: 2rem auto 3rem;
		font-weight: bold;
		width: 20rem;
		text-align: left;
		span {
			width: 3rem;
			display: block;
		}
		input,
		textarea {
			margin: 0;
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
	@media only screen and (max-width: 61.1875em) {
		form {
			width: 20rem;
			margin: auto;
		}
	}
`;

import styled from 'styled-components';

export const WorkImagesContainer = styled.div`
	background: #000;
	.title {
		position: fixed;
		color: #fff;
		h1,
		h3 {
			margin: 0.5rem 0;
		}
	}
	.subtitle {
		white-space: pre-wrap;
	}
	/* 980px + big */
	@media only screen and (min-width: 61.25em) {
		.title {
			top: 2.5em;
			left: 9.7rem;
		}
		.subtitle {
			max-width: calc(100% - 20rem);
		}
	}

	/* < 979px small */
	@media only screen and (max-width: 61.1875em) {
		.title {
			top: 4em;
			padding: 0;
			width: 100%;
			height: calc(50vh - 4rem);
			overflow: hidden;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			h1 {
				font-size: 1.5rem;
				text-align: center;
				width: 100%;
				margin-top: 2rem;
			}
		}
		.subtitle {
			padding: 0 3rem;
			width: calc(100% - 6rem);
		}
	}

	.work-images {
		position: fixed;
		width: 100vw;
		height: 100vh;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.work-image {
		right: -100vw;
		width: 100%;
		height: 100%;
		opacity: 0.1;
		position: absolute;
	}
	.work-container {
		position: absolute;
		top: 50%;
		max-width: calc(100% - 48rem);
		max-height: calc(100vh - 30rem);
		background-size: cover;
		background-position: top left;
		background-repeat: no-repeat;
	}
	.img {
		max-width: 95vw;
		max-height: 50vh;
		display: block;
	}
	/* 980px + */
	@media only screen and (min-width: 61.25em) {
		.work-container {
			left: 10rem;
			transform: translateY(-50%);
		}
		.img {
			max-width: calc(100vw - 25rem);
			max-height: 50vh;
			display: block;
		}
	}

	/* < 979px */
	@media only screen and (max-width: 61.1875em) {
		.work-container {
			left: 3rem;
		}
		.img {
			max-width: calc(100vw - 6rem);
			max-height: calc(50vh - 7rem);
			display: block;
		}
	}

	.caption {
		color: #000;
		top: 50%;
		width: auto;
		text-transform: capitalize;
		background: #fff;
		padding: 10px 20px;
		margin: 40px 0 0;
		font-size: 0.9rem;
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		&:before {
			content: '';
			display: block;
			width: 5px;
			height: 5px;
			position: absolute;
			top: -10px;
			left: -11px;
			border: 11px solid #fff;
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-top-color: transparent;
			transform: rotate(135deg);
			box-sizing: border-box;
		}
	}

	/* < 979px */
	@media only screen and (max-width: 61.1875em) {
		.caption {
			max-width: calc(100vw - 6rem);
			min-width: 12rem;
		}
	}
	.height-section {
		height: 100vh;
	}
	.cover {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(90deg, transparent, black);
		transform-origin: right;
	}
	.spots {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}
	/* 980px + */
	@media only screen and (min-width: 61.25em) {
		.spots {
			left: 3rem;
		}
	}

	/* < 979px */
	@media only screen and (max-width: 61.1875em) {
		.spots {
			left: 1rem;
		}
	}
	.spot-container {
		width: 12px;
		height: 12px;
		border: 1px solid #fff;
		border-radius: 100%;
		margin: 8px 0;
		cursor: pointer;
	}
	.spot {
		background: #fff;
		width: 13px;
		height: 13px;
		border-radius: 100%;
	}
	.prev,
	.next {
		border: 1px solid #fff;
		width: 9px;
		height: 9px;
		background: transparent;
		transform: rotate(45deg);
		padding: 0;
		margin-left: 2.5px;
		cursor: pointer;
		&:focus {
			outline: 0;
		}
	}
	.prev {
		border-right: 0;
		border-bottom: 0;
		margin-bottom: 6px;
	}
	.next {
		border-left: 0;
		border-top: 0;
	}
`;

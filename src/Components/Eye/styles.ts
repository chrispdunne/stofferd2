import styled from 'styled-components';

export const CanvasContainer = styled.div`
	/* height: 50vh; */
	background-color: #000;
	min-height: 100vh;
	canvas {
		background-color: #000;
		height: 80vh;
		width: 80vw;
	}

	/* 980px */
	@media only screen and (min-width: 61.25em) {
		canvas {
			height: 100vh;
			width: 100vw;
		}
	}
`;

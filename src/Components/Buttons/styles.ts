import styled from 'styled-components';

export const ChevronSvgButton = styled.svg`
	position: absolute;
	cursor: pointer;
	bottom: 50px;
	width: 44px;
	height: 44px;
	position: absolute;
	bottom: 50px;
	left: 50%;
	transform: translateX(-50%);
	/* 980px */
	@media only screen and (min-width: 61.25em) {
		width: 16px;
		height: 16px;
	}
`;

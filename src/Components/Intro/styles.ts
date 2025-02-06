import styled from 'styled-components';
import { WorkSubtitle, WorkTitle } from '../../Pages/styles';

export const IntroContainer = styled.div`
	position: absolute;
	top: 60%;
	z-index: 2;
	text-align: center;
	color: #fff;
	width: 100%;
	margin-top: 50px;
	/* 980px */
	@media only screen and (min-width: 61.25em) {
		left: 0;
		top: 50%;
		margin-top: 0px;
		transform: translateY(-50%);
		text-align: left;
		margin-left: 50px;
		width: 30%;
	}
`;

export const IntroTitle = styled(WorkTitle)``;

export const IntroSubtitle = styled(WorkSubtitle)``;

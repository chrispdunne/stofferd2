import styled from 'styled-components';
import { TimelineProps } from '../../types';

const StyledTimelineSection = styled.div`
	display: flex;
	position: relative;
	left: -22px;
	height: 33vh;
	p {
		margin: 0.5rem 0;
		line-height: 1.4;
	}
	[class^='circle'] {
		background: #fff;
		border-radius: 100%;
	}
	.pointer {
		display: flex;
		margin: 1rem;
		align-items: center;
	}
	.circle1 {
		width: 11px;
		height: 11px;
		position: relative;
		margin: 0;
		&:before,
		&:after {
			content: '';
			position: absolute;
			border: 1px solid #fff;
			border-radius: 100%;
			background: transparent;
		}
		&:before {
			width: 17px;
			height: 17px;
			top: -4px;
			left: -4px;
		}
		&:after {
			width: 25px;
			height: 25px;
			top: -8px;
			left: -8px;
		}
	}
	.circle2 {
		width: 7px;
		height: 7px;
	}
	.line {
		width: 10vw;
		max-width: 100px;
		height: 1px;
		background: #fff;
		transform-origin: left;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h2 {
		margin: 0.5rem 0;
	}
	.where {
		font-weight: 900;
	}
	.callout {
		font-weight: 900;
		text-transform: uppercase;
	}
	/* SMALL < 979px */
	@media only screen and (max-width: 61.1875em) {
		.text {
			max-width: 40rem;
		}
	}
	/* BIG 980px + */
	@media only screen and (min-width: 61.25em) {
		.text {
			max-width: 40rem;
		}
	}
`;

export default function TLSection({
	className,
	date,
	where,
	desc,
	callout
}: TimelineProps) {
	return (
		<StyledTimelineSection className={className ? className : undefined}>
			<div className="pointer">
				<div className="circle1"></div>
				<div className="line"></div>
				<div className="circle2"></div>
			</div>

			<div className="text">
				<h2>{date}</h2>
				<p className="where">{where}</p>
				<p className="desc">{desc}</p>
				{callout && <p className="callout">{callout}</p>}
			</div>
		</StyledTimelineSection>
	);
}

import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Nav from '../Components/Nav';
import { useEffect, useRef, useState } from 'react';
import { sections } from '../content/aboutSection';
import TLSection from '../Components/TLSection';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = styled.main`
	background: #000;
	color: #fff;
	h1 {
		position: absolute;
		top: 2.5rem;
		left: 0;
		padding-left: 3rem;
		margin: 0;
	}
	.timeline {
		margin-left: 3rem;
		padding-top: 6rem;
		padding-top: 33vh;
		position: relative;
		&:before {
			content: '';
			border-left: 1px solid #fff;
			display: block;
			position: absolute;
			top: 10rem;
			bottom: 0;
			width: 1px;
		}
	}
	// small
	@media only screen and (max-width: 61.1875em) {
		h1 {
			width: 100vw;
			left: 1.9rem;
			margin: 0;
			padding: 0;
			font-size: 1.5rem;
			top: 6rem;
		}
		.timeline {
			margin-left: 2rem;
		}
	}
	// large
	@media only screen and (min-width: 61.25em) {
		.timeline {
			margin-left: 50px;
		}
	}
`;

export default function About() {
	const timeline = useRef<HTMLDivElement>(null);

	const [tl, setTl] = useState<any>(null);
	useEffect(() => {
		setTl(
			gsap.timeline({
				scrollTrigger: {
					scrub: true,
					invalidateOnRefresh: true
					// markers: true,
				}
			})
		);
	}, []);

	useEffect(() => {
		if (!tl) return;

		const sectionEls: Element[] =
			timeline && timeline.current
				? [...timeline.current.querySelectorAll('.timeline-section')]
				: [];

		sectionEls.forEach((section, i) => {
			if (i === 0) return;
			const circle1 = section.querySelector('.circle1');
			const circle2 = section.querySelector('.circle2');
			const line = section.querySelector('.line');
			const text = section.querySelector('.text');

			// tl.set(section, { autoAlpha: 0.5 })
			tl.set(circle1, { scale: 0 }, 0);
			tl.set(line, { scaleX: 0 }, 0);
			tl.set(circle2, { scale: 0 }, 0);
			tl.set(text, { autoAlpha: 0 }, 0);

			// grow circle
			tl.fromTo(
				circle1,
				{ scale: 0 },
				{
					scale: 1
				}
			);
			// grow line
			tl.fromTo(
				line,
				{ scaleX: 0 },
				{
					scaleX: 1
				}
			);
			// grow circle 2
			tl.fromTo(
				circle2,
				{ scale: 0 },
				{
					scale: 1
				}
			);
			// fade text in
			tl.fromTo(
				text,
				{ autoAlpha: 0 },
				{
					duration: 1,
					autoAlpha: 1
				}
			);
		});
		tl.scrollTrigger.refresh();
		return () => {};
	}, [tl, timeline]);

	return (
		<>
			<Nav />

			<AboutPage>
				<h1>About Stoffer</h1>
				<div className="timeline" ref={timeline}>
					{sections.map((section, i) => {
						return (
							<TLSection
								key={i}
								className="timeline-section"
								date={section.date}
								where={section.where}
								desc={section.desc}
								callout={
									section.callout
										? section.callout
										: undefined
								}
							/>
						);
					})}
				</div>
			</AboutPage>
		</>
	);
}

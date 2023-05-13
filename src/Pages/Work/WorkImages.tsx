import { useRef, useState } from 'react';
import { WorkImagesContainer } from './styles';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useTimeline from '../../hooks/useTImeline';
import useNextPrev from '../../hooks/useNextPrev';
import useAnimateImages from '../../hooks/useAnimateImages';
import useScrollToSection from '../../hooks/useScrollToSection';

gsap.registerPlugin(ScrollTrigger);

interface Props {
	images: string[];
	title: string;
	subtitle: string;
}
export default function WorkImages({ images, title, subtitle }: Props) {
	const workImagesRef = useRef<HTMLDivElement>(null);
	const spots = useRef<HTMLDivElement>(null);
	const [tl, setTl] = useState<gsap.core.Timeline>();

	useTimeline(setTl);

	const getNextPrev = useNextPrev(images.length, tl);

	useAnimateImages(tl, images, workImagesRef, spots);

	const scrollToSection = useScrollToSection(images.length);

	return (
		<WorkImagesContainer>
			<div className="title">
				<h1>{title}</h1>
				<p className="subtitle">{subtitle}</p>
			</div>
			<div ref={workImagesRef} className="work-images">
				{images.map((img, i) => {
					// const caption = String(img.match(/[^/[0-9]+-]*.+[.$]/g))
					// 	.replace(/-/g, ' ')
					// 	.replace(/[^.]*$/, '');
					const caption = img
						.replace(/^(\/[a-zA-Z | /]*\d+-)/g, '')
						.replace(/\.[a-zA-Z | \d]*/g, '')
						.replace(/-/g, ' ');
					return (
						<div key={i} className="work-image">
							<div className="work-container">
								<img
									className="img"
									src={img}
									alt="work screenshot"
								/>
								<div className="caption">{caption}</div>
							</div>
						</div>
					);
				})}
			</div>
			<div ref={spots} className="spots">
				<button
					className="prev"
					onClick={e => scrollToSection(getNextPrev()['prev'])}
				/>
				{images.map((img, i) => {
					return (
						<div
							key={i}
							className="spot-container"
							onClick={() => scrollToSection(i)}
						>
							<div className="spot" />
						</div>
					);
				})}
				<button
					className="next"
					onClick={e => scrollToSection(getNextPrev()['next'])}
				/>
			</div>
			<div
				className="trigger"
				style={{ height: images.length * 100 + 'vh' }}
			/>
		</WorkImagesContainer>
	);
}

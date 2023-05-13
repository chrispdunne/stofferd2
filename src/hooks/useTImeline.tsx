import { useEffect } from 'react';
import gsap from 'gsap';

export default function useTimeline(setTl: (v: gsap.core.Timeline) => void) {
	return useEffect(() => {
		setTl(
			gsap.timeline({
				scrollTrigger: {
					trigger: '.trigger',
					start: '0px 1px', // trg | scrl
					end: 'bottom bottom', //trg | scrl
					scrub: true
				}
			})
		);
	}, [setTl]);
}

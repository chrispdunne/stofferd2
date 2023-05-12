import { RefObject, useEffect } from 'react';

export default function useAnimateImages(
	tl: gsap.core.Timeline | undefined,
	images: string[],
	workImagesRef: RefObject<HTMLDivElement>,
	spots: RefObject<HTMLDivElement>
) {
	return useEffect(() => {
		if (!tl) return;

		const imageEls: Element[] =
			workImagesRef && workImagesRef.current
				? Array.from(
						workImagesRef.current.querySelectorAll('.work-image')
				  )
				: [];

		const spotEls: Element[] =
			spots && spots.current !== null && workImagesRef.current
				? Array.from(spots.current.querySelectorAll('.spot'))
				: [];

		imageEls.forEach((img, i) => {
			// setup
			const spot = spotEls[i];
			if (i === 0) {
				tl.set(img, { opacity: 1, x: '-100%' }, 0);
			} else {
				tl.set(spot, { css: { opacity: 0 } }, 0);
			}

			// animate in
			if (i !== 0) {
				tl.to(
					img,
					{ opacity: 1, duration: 1, x: '-100%', ease: 'none' },
					i - 1
				);
				tl.to(spot, { duration: 1, css: { opacity: 1 } }, i - 1);
			}
			// animate out
			if (i !== images.length - 1) {
				tl.to(
					img,
					{ opacity: 0, duration: 1, x: '-200%', ease: 'none' },
					i
				);
				tl.to(spot, { duration: 1, css: { opacity: 0 } }, i);
			}
		});
		tl.scrollTrigger?.refresh();
		return () => {};
	}, [tl, images, workImagesRef, spots]);
}

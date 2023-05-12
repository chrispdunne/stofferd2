import { useCallback } from 'react';

export default function useNextPrev(
	imageCount: number,
	tl?: gsap.core.Timeline
) {
	return useCallback(() => {
		if (!tl) return { prog: 0, prev: 0, next: 0 };
		const prog = tl.progress();
		const progSection = prog * (imageCount ?? 0 - 1);
		const floored = Math.floor(progSection);
		return {
			prog,
			prev: progSection - floored > 0.1 ? floored : floored - 1,
			next: prog !== 0 ? Math.ceil(progSection) : 1
		};
	}, [imageCount, tl]);
}

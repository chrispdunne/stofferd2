import { useCallback } from 'react';

export default function useScrollToSection(imageCount: number) {
	return useCallback(
		(destination: number) => {
			if (!destination && destination !== 0) return;
			const html = document.querySelector('html');
			if (html) {
				html.scrollTo({
					left: 0,
					top: (html.offsetHeight / imageCount) * destination,
					behavior: 'smooth'
				});
			}
		},
		[imageCount]
	);
}

import { ChevronSvgButton } from './styles';

interface Props {
	white?: boolean;
}

export default function BackToTopButton({ white }: Props) {
	const handleOnClick = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	const title = 'Scroll to top of page';

	return (
		<ChevronSvgButton
			onClick={handleOnClick}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			aria-label={`title`}
		>
			<title>{title}</title>
			<path
				// svg path for chevron pointing UP
				d="M 50 0 L 100 50 L 90 60 L 50 20 L 10 60 L 0 50 Z"
				fill={white ? 'white' : 'black'}
			/>
		</ChevronSvgButton>
	);
}

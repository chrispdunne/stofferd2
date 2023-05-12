import { ChevronSvgButton } from './styles';

interface Props {
	target: string;
	white?: boolean;
}

export default function NextSectionButton({ target, white }: Props) {
	const handleOnClick = () =>
		window.scrollTo({
			top: document.getElementById(target)?.offsetTop,
			behavior: 'smooth'
		});
	const title = `Scroll to next section`;
	return (
		<ChevronSvgButton
			onClick={handleOnClick}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			aria-label={title}
		>
			<title>{title}</title>
			<path
				// svg path for chevron pointing down NOT up
				d="M 50 100 L 100 50 L 90 40 L 50 80 L 10 40 L 0 50 Z"
				fill={white ? 'white' : 'black'}
			/>
		</ChevronSvgButton>
	);
}

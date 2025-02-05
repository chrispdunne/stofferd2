import Nav from '../../Components/Nav';
import { Container, PageTitle } from './styles';

export default function Contact() {
	return (
		<>
			<Nav />
			<Container>
				<PageTitle>Contact</PageTitle>
				<a href="mailto:hello@chrisdunne.co.uk">
					hello@chrisdunne.co.uk
				</a>
			</Container>
		</>
	);
}

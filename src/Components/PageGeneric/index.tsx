import { ReactNode } from 'react';
import Nav from '../Nav';
import { Container } from './styles';

interface Props {
	children: ReactNode;
}

export default function PageGeneric({ children }: Props) {
	return (
		<Container>
			<Nav />
			<>{children}</>
		</Container>
	);
}

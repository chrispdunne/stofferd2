import { ReactNode, useEffect, useState } from 'react';
import Nav from '../Nav';
import { Container } from './styles';
import LoginForm from '../LoginForm';

interface Props {
	children: ReactNode;
}

export default function PageGeneric({ children }: Props) {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		const loggedIn = localStorage.getItem('loggedIn');
		if (loggedIn) setLoggedIn(true);
	}, []);
	return loggedIn ? (
		<Container>
			<Nav />
			<>{children}</>
		</Container>
	) : (
		<LoginForm />
	);
}

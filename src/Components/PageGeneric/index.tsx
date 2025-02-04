import { ReactNode, useEffect, useState } from 'react';
import Nav from '../Nav';
import { Container } from './styles';
import LoginForm from '../LoginForm';

interface Props {
	children: ReactNode;
	isProtected?: boolean;
}

export default function PageGeneric({ children, isProtected }: Props) {
	const [loggedIn, setLoggedIn] = useState(true);
	useEffect(() => {
		const loggedIn = localStorage.getItem('loggedIn');
		if (loggedIn === 'true') setLoggedIn(true);
	}, []);
	return !isProtected || loggedIn ? (
		<Container>
			<Nav />
			<>{children}</>
		</Container>
	) : (
		<LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
	);
}

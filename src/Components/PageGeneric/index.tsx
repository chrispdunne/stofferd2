import { ReactNode, useEffect, useState } from 'react';
import Nav from '../Nav';
import { Container } from './styles';
import LoginForm, { EXPIRY_KEY } from '../LoginForm';

interface Props {
	children: ReactNode;
	isProtected?: boolean;
}

export default function PageGeneric({ children, isProtected }: Props) {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		const loggedInExpiry = parseInt(
			localStorage.getItem(EXPIRY_KEY) ?? '0'
		);
		const now = Date.now();
		if (loggedInExpiry > now) setLoggedIn(true);
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

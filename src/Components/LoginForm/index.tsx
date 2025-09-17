import styled from 'styled-components';

const EXPIRY_TIME = 1000 * 60 * 60 * 24; // 24 hours in ms
export const EXPIRY_KEY = 'exp';

const LoginBox = styled.div`
	position: fixed;
	z-index: 50;
	background: #000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	label {
		color: #fff;
		display: block;
		padding: 1rem 0 1rem;
		font-size: 1.5rem;
		text-align: center;
	}
	input {
		background: #000;
		font-size: 2rem;
		color: #fff;
		outline: 0;
		border: 0;
		border-bottom: 1px solid #fff;
		max-width: 90vw;
	}
`;
interface Props {
	loggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
}
export default function LoginForm({ loggedIn, setLoggedIn }: Props) {
	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const res = await window.fetch('/.netlify/functions/entry', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				typed: e.target.value
			})
		});
		const body = await res.text();
		if (body === 'true') {
			window.localStorage.setItem(
				EXPIRY_KEY,
				(Date.now() + EXPIRY_TIME).toString()
			);
			setLoggedIn(true);
		}
	};
	return (
		<LoginBox>
			<div className="container">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					//value={typed}
					//onChange={handleChange}
					onChange={handleChange}
				/>
			</div>
		</LoginBox>
	);
}

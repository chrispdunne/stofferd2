import { useState } from 'react';
import styled from 'styled-components';

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
export default function LoginForm() {
	// const [typed, setTyped] = useState('');
	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
	// 	setTyped(e.target.value);
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
			window.localStorage.setItem('loggedIn', 'true');
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
